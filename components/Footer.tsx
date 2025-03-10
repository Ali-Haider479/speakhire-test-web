import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Button,
  Link,
  Stack,
  SxProps,
  Theme,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";

interface FooterLink {
  label: string;
  href: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  sx?: SxProps<Theme>;
}

const footerSections: FooterSection[] = [
  {
    title: "About us",
    links: [
      { label: "Our mission", href: "/mission" },
      { label: "Impact", href: "/impact" },
      { label: "Theory of change", href: "/theory-of-change" },
      { label: "News", href: "/news" },
      { label: "Speakhire magazine", href: "/magazine" },
    ],
  },
  {
    title: "Get involved",
    links: [
      { label: "Partners", href: "/partners" },
      { label: "Champions", href: "/champions" },
      { label: "Interns", href: "/interns" },
      { label: "Careers", href: "/careers" },
      { label: "Volunteers", href: "/volunteers" },
    ],
  },
  {
    title: "Activities",
    links: [
      { label: "All activities", href: "/activities" },
      { label: "SPEAKHIRE series", href: "/series" },
      { label: "First step", href: "/first-step" },
      { label: "Leadership course", href: "/leadership" },
      { label: "Foundational year", href: "/foundational-year" },
    ],
  },
];

const socialLinks = [
  { Icon: LinkedInIcon, href: "#", label: "LinkedIn" },
  { Icon: InstagramIcon, href: "#", label: "Instagram" },
  { Icon: FacebookIcon, href: "#", label: "Facebook" },
  { Icon: GoogleIcon, href: "#", label: "Google" },
];

const Footer: React.FC<FooterProps> = ({ sx }) => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#E9F6FB",
        py: 6,
        ...sx,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={30}>
          {/* Left Section */}
          <Grid item xs={12} md={4}>
            <Box>
              <Image
                src="/speakhire-logo.png"
                alt="Speakhire Logo"
                width={150}
                height={50}
                style={{ marginBottom: "1rem" }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                SPEAKHIRE is a 501c3 organization. EIN 47-4132773
              </Typography>

              {/* Social Media Icons */}
              <Stack direction="row" spacing={2} sx={{ mb: 3 }}>
                {socialLinks.map(({ Icon, href, label }) => (
                  <Link
                    key={label}
                    href={href}
                    color="#08547A"
                    aria-label={label}
                  >
                    <Icon />
                  </Link>
                ))}
              </Stack>

              {/* Action Buttons */}
              <Stack spacing={2}>
                <Button
                  variant="contained"
                  fullWidth
                  sx={{
                    bgcolor: "#006397", // Button color
                    borderRadius: 5,
                    padding: "10px 30px",
                    "&:hover": {
                      bgcolor: "#0A4A5E", // Darker hover effect
                    },
                  }}
                >
                  <Typography
                    variant="body1"
                    sx={{
                      fontSize: 14,
                      fontWeight: "bold",
                      textTransform: "none",
                    }}
                  >
                    Become a partner now
                  </Typography>
                </Button>
                <Link href="/donate">
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      bgcolor: "#8DC63F", // Button color
                      borderRadius: 5,
                      padding: "10px 30px",
                      "&:hover": {
                        bgcolor: "#7AB32F", // Darker hover effect
                      },
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontSize: 14,
                        fontWeight: "bold",
                        textTransform: "none",
                      }}
                    >
                      Donate
                    </Typography>
                  </Button>
                </Link>
              </Stack>
            </Box>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} md={8}>
            <Grid container spacing={4}>
              {footerSections.map((section) => (
                <Grid item xs={12} sm={4} key={section.title}>
                  <Typography
                    variant="h6"
                    color="text.primary"
                    gutterBottom
                    sx={{ fontWeight: 500 }}
                  >
                    {section.title}
                  </Typography>
                  <Box component="ul" sx={{ listStyle: "none", p: 0, m: 0 }}>
                    {section.links.map((link) => (
                      <Box component="li" key={link.label} sx={{ mb: 1 }}>
                        <Link
                          href={link.href}
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            textDecoration: "none",
                            "&:hover": { color: "primary.main" },
                          }}
                        >
                          {link.label}
                        </Link>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
