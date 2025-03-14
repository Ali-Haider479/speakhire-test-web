'use client';
import React, { useState, useEffect, useRef } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardContent, 
  Grid, 
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';

interface BoardMember {
  name: string;
  title: string;
  imagePath: string;
  description: string;
}

interface TitleParts {
  regularText: string;
  highlightedText?: string;
  afterHighlightText?: string;
  highlightColor?: string;
}

const StyledListItem = styled(ListItem)<{ active: boolean }>(({ theme, active }) => ({
  borderRadius: 50,
  marginBottom: theme.spacing(2),
  backgroundColor: active ? theme.palette.primary.main : '#ECF6FB',
  color: active ? theme.palette.primary.contrastText : theme.palette.text.primary,
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: active ? theme.palette.primary.main : theme.palette.action.hover,
  },
  transition: theme.transitions.create(['background-color', 'color'], {
    duration: theme.transitions.duration.standard,
  }),
}));

interface MemberBoardProps {
  title: string | TitleParts;
  subtitle?: string;
  members: BoardMember[];
  autoPlayInterval?: number; // Time in milliseconds between transitions
}

// Global observer instance to avoid creating multiple observers
let globalObserver: IntersectionObserver | null = null;
const observedElements = new Map();

const MemberBoard: React.FC<MemberBoardProps> = ({ 
  title, 
  subtitle,
  members, 
  autoPlayInterval = 3000 // Default to 3 seconds
}) => {
  const [activeMember, setActiveMember] = useState<number>(0);
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isVisible, setIsVisible] = useState<boolean>(true); // Start visible by default
  const componentRef = useRef<HTMLDivElement>(null);
  const imagesLoaded = useRef<boolean[]>(new Array(members.length).fill(false));
  const [allImagesLoaded, setAllImagesLoaded] = useState<boolean>(false);
  
  // Generate a unique ID for this component instance
  const titleText = typeof title === 'string' ? title : title.regularText;
  const boardId = `member-board-${titleText.replace(/\s+/g, '-').toLowerCase()}`;
  
  // Image preloading function
  useEffect(() => {
    const preloadImages = async () => {
      const loadPromises = members.map((member, index) => {
        return new Promise<void>((resolve) => {
          const img = new Image();
          img.src = member.imagePath;
          img.onload = () => {
            imagesLoaded.current[index] = true;
            resolve();
          };
          img.onerror = () => {
            imagesLoaded.current[index] = true; // Mark as loaded even on error
            resolve();
          };
        });
      });
      
      try {
        await Promise.all(loadPromises);
        setAllImagesLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setAllImagesLoaded(true); // Continue anyway
      }
    };
    
    preloadImages();
  }, [members]);

  // Setup intersection observer with better performance characteristics
  useEffect(() => {
    if (typeof window === 'undefined' || !componentRef.current) return;
    
    // Create a shared observer if it doesn't exist
    if (!globalObserver) {
      globalObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            const id = entry.target.id;
            const isIntersecting = entry.isIntersecting;
            
            // Update the stored visibility state
            if (observedElements.has(id)) {
              const setter = observedElements.get(id);
              if (setter) setter(isIntersecting);
            }
          });
        },
        { 
          threshold: 0.01, // Lower threshold to detect sooner
          rootMargin: "100px 0px" // Add 100px margin to detect before fully visible
        }
      );
    }
    
    // Store the setState function and register this component
    observedElements.set(boardId, setIsVisible);
    
    // Start observing this component
    if (componentRef.current) {
      globalObserver.observe(componentRef.current);
    }
    
    return () => {
      if (componentRef.current && globalObserver) {
        globalObserver.unobserve(componentRef.current);
        observedElements.delete(boardId);
      }
    };
  }, [boardId]);

  // Effect for automatic carousel - using requestAnimationFrame for better performance
  useEffect(() => {
    if (isPaused || !isVisible || !allImagesLoaded) return;
    
    let start: number | null = null;
    let requestId: number;
    let elapsed = 0;
    
    // Add a slight delay offset based on title to prevent all carousels from changing at once
    const offset = (titleText.length % 5) * 500;
    const interval = autoPlayInterval + offset;
    
    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      
      elapsed = timestamp - start;
      
      if (elapsed >= interval) {
        // Time to update
        setActiveMember(prev => (prev + 1) % members.length);
        start = timestamp;
      }
      
      requestId = requestAnimationFrame(step);
    };
    
    requestId = requestAnimationFrame(step);
    
    return () => {
      cancelAnimationFrame(requestId);
    };
  }, [isPaused, isVisible, autoPlayInterval, members.length, titleText, allImagesLoaded]);

  // Handler for manual selection - only sets the active member without pausing
  const handleMemberClick = (index: number) => {
    setActiveMember(index);
  };

  // Render the title with optional highlighting
  const renderTitle = () => {
    if (typeof title === 'string') {
      return (
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#333', mb: subtitle ? 1 : 3 }}>
          {title}
        </Typography>
      );
    } else {
      const { regularText, highlightedText, afterHighlightText, highlightColor = '#00A3D9' } = title;
      return (
        <Typography variant="h3" component="h1" gutterBottom sx={{ color: '#333', mb: subtitle ? 1 : 0 }}>
          {regularText}{' '}
          <Box component="span" sx={{ color: highlightColor, display: 'inline' }}>
            {highlightedText}
          </Box>
          {afterHighlightText && ' ' + afterHighlightText}
        </Typography>
      );
    }
  };
  
  return (
    <Box 
      id={boardId}
      ref={componentRef}
      sx={{ 
        width: '100%', 
        backgroundColor: '#F2FAFD',
        padding: 4, 
        position: 'relative',
        opacity: allImagesLoaded ? 1 : 0.7,
        transition: 'opacity 0.5s ease-in-out'
      }}
    >
      <Box sx={{ width: "80vw", margin: '0 auto' }}>
        {/* Title and subtitle section - full width */}
        {(title || subtitle) && (
          <Box sx={{ mb: 4, width: '100%' }}>
            {renderTitle()}
            
            {/* Subtitle if provided */}
            {subtitle && (
              <Typography 
                variant="subtitle1" 
                component="h2" 
                gutterBottom 
                sx={{ 
                  color: '#555', 
                  fontWeight: 'normal'
                }}
              >
                {subtitle}
              </Typography>
            )}
          </Box>
        )}
        
        <Grid container spacing={4} alignItems="flex-start">
          {/* Left section */}
          <Grid item xs={12} md={6} >
            
            <Card 
              elevation={0} 
              sx={{ 
                borderRadius: 6, 
                overflow: 'hidden',
                transition: 'all 0.5s ease',
                position: 'relative',
                mt: 0,
                backgroundColor:'#ECF6FB',
              }}
            >
              {/* Image container with transition */}
              <Box sx={{ position: 'relative', width: '100%', height: 400, overflow: 'hidden', borderRadius: 6 }}>
                {members.map((member, idx) => (
                  <Box 
                    key={idx}
                    component="img"
                    src={member.imagePath}
                    alt={member.name}
                    sx={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      opacity: idx === activeMember ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                      zIndex: idx === activeMember ? 1 : 0,
                      borderRadius: 2
                    }}
                    onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                      e.currentTarget.src = "/api/placeholder/600/400";
                      e.currentTarget.alt = "Board member placeholder";
                    }}
                    loading="eager"
                  />
                ))}
              </Box>
              <CardContent sx={{ p: 3, minHeight: '180px', position: 'relative', backgroundColor:'#ECF6FB' }}>
                {members.map((member, idx) => (
                  <Typography 
                    key={idx}
                    variant="body1" 
                    color="text.secondary"
                    sx={{ 
                      position: 'absolute',
                      opacity: idx === activeMember ? 1 : 0,
                      transition: 'opacity 0.8s ease-in-out',
                      width: 'calc(100% - 48px)' // Account for padding
                    }}
                  >
                    {member.description}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>

          {/* Right section - Carousel */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
            {members.map((member, index) => (
              <StyledListItem 
                key={index} 
                active={index === activeMember}
                onClick={() => handleMemberClick(index)}
              >
                <ListItemAvatar sx={{mr:3}}>
                  <Avatar 
                    src={member.imagePath}
                    alt={member.name}
                    sx={{ width: 56, height: 56 }}
                  />
                </ListItemAvatar>
                <ListItemText 
                  primary={
                    <Typography 
                      variant="subtitle1" 
                      sx={{ fontWeight: 'bold', color: index === activeMember ? 'white' : 'inherit' }}
                    >
                      {member.name}
                    </Typography>
                  }
                  secondary={
                    <Typography 
                      variant="body2" 
                      sx={{ color: index === activeMember ? 'rgba(255, 255, 255, 0.7)' : 'text.secondary' }}
                    >
                      {member.title}
                    </Typography>
                  }
                />
              </StyledListItem>
            ))}
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default MemberBoard;