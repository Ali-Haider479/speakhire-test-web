import {
  Grid,
  Card,
  Box,
  CardContent,
  Chip,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import { useState } from "react";
import Image from "next/image";

const CourseCard = ({ course }: any) => {
  const [showMore, setShowMore] = useState(false);
  const MAX_LENGTH = 125; // Limit before "Read More" appears

  const getDescription = () => {
    if (!course.description) return "";
    return showMore || course.description.length <= MAX_LENGTH
      ? course.description
      : `${course.description.substring(0, MAX_LENGTH)}...`;
  };

  return (
    <Grid item xs={12} sm={6} md={4} key={course.id}>
      <Card
        elevation={0}
        sx={{
          backgroundColor: "transparent",
          borderRadius: 0,
          height: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* Course Image Container */}
        <Box
          sx={{
            position: "relative",
            height: "220px",
            borderRadius: "8px",
            overflow: "hidden",
          }}
        >
          <Image
            src={
              course?.cover_image?.source?.url
                ? course?.cover_image?.source?.url
                : null
            }
            alt={`${course.title}`}
            fill
            style={{ objectFit: "cover" }}
          />
        </Box>

        {/* Course Content */}
        <CardContent sx={{ flexGrow: 1, px: 0, pt: 2 }}>
          {course.cohortType && (
            <Chip
              label={course.cohortType}
              size="small"
              sx={{
                backgroundColor: "#E6F2F9",
                color: "#0F99C3",
                fontSize: "0.75rem",
                height: "24px",
                marginBottom: "10px",
                borderRadius: "4px",
              }}
            />
          )}

          {/* Course Title with Highlighted Word */}
          <Box display="flex" flexWrap="wrap" alignItems="baseline" mb={1}>
            <Typography
              variant="h5"
              component="span"
              sx={{ fontWeight: 400, mr: 1 }}
            >
              {course.title.split(" ")[0]}
            </Typography>
            <Typography
              variant="h5"
              component="span"
              sx={{ fontWeight: 400, color: "#0F99C3" }}
            >
              {course.title.split(" ")[1]}
            </Typography>
          </Box>

          {/* Course Description with Read More */}
          <Typography
            variant="body1"
            sx={{ color: "text.secondary", fontSize: 16 }}
          >
            {getDescription()}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center", px: 0 }}>
          <Button
            variant="outlined"
            sx={{
              borderRadius: "20px", // Matching your button style
              borderColor: "#0F99C3",
              color: "#0F99C3",
              padding: "8px 24px",
              "&:hover": {
                backgroundColor: "rgba(15, 153, 195, 0.1)",
                borderColor: "#0F99C3",
              },
              width: "100%",
              textTransform: "none",
              fontSize: 16,
            }}
            onClick={() => setShowMore(!showMore)}
          >
            {course.description.length > MAX_LENGTH &&
              (showMore ? "Show Less" : "Read More")}
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default CourseCard;
