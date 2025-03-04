'use client';
import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Card, 
  CardMedia, 
  CardContent, 
  Grid, 
  Paper, 
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';


interface BoardMember {
  name: string;
  title: string;
  imagePath: string;
  description:string;
}

const StyledListItem = styled(ListItem)<{ active: boolean }>(({ theme, active }) => ({
  borderRadius: 50,
  marginBottom: theme.spacing(2),
  backgroundColor: active ? theme.palette.primary.main : theme.palette.background.paper,
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
    title: string;
    members: BoardMember[];
  }

const MemberBoard: React.FC<MemberBoardProps> = ({ title, members }) => {
  // State for active board member
  const [activeMember, setActiveMember] = useState<number>(0);


  
  return (
    <Box sx={{ width: '100%', backgroundColor: '#f0f7ff', padding: 4 }}>
      <Box sx={{ maxWidth: 1200, margin: '0 auto' }}>
        <Grid container spacing={4}>
          {/* Left section */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
              {title}
            </Typography>
            <Card elevation={3} sx={{ borderRadius: 2, overflow: 'hidden' }}>
              {/* Next.js Image component for optimization */}
              <Box sx={{ position: 'relative', width: '100%', height: 400 }}>
                {/* Use next/image with placeholder fallback */}
                <Box 
                  component="img"
                  src={members[activeMember].imagePath}
                  alt={members[activeMember].name}
                  sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                    e.currentTarget.src = "/api/placeholder/600/400";
                    e.currentTarget.alt = "Board member placeholder";
                  }}
                />
              </Box>
              <CardContent sx={{ p: 3 }}>
                <Typography variant="body1" color="text.secondary">
                    {members[activeMember].description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* Right section - Carousel */}
          <Grid item xs={12} md={6} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            {members.map((member, index) => (
              <StyledListItem 
                key={index} 
                active={index === activeMember}
                onClick={() => setActiveMember(index)}
              >
                <ListItemAvatar>
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