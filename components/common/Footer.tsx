import { NAV_LINKS } from "@/constants/navigation";
import {
  Box,
  Container,
  Divider,
  Stack,
  Typography,
} from "@mui/material";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(47, 111, 115, 0.12)",
        bgcolor: "rgba(255,255,255,0.72)",
      }}
    >
      <Container sx={{ py: 5 }}>
        <Stack spacing={2}>
          <Typography
            variant="h5"
            sx={{
              fontFamily: '"Cormorant Garamond", serif',
              color: "primary.dark",
            }}
          >
            Carmel Oasis
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ maxWidth: 540 }}>
            A convent-led old age home shaped by prayer, companionship,
            dignity, and compassionate daily care for senior residents.
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{ flexWrap: "wrap" }}
          >
            {NAV_LINKS.map((link) => (
              <Typography
                key={link.name}
                component="a"
                href={link.href}
                sx={{ textDecoration: "none", color: "text.primary" }}
              >
                {link.name}
              </Typography>
            ))}
          </Stack>
          <Divider />
          <Typography variant="body2" color="text.secondary">
            © 2026 Carmel Oasis at Pushpasadan Old Age Home. All rights reserved.
          </Typography>
        </Stack>
      </Container>
    </Box>
  );
};

export default Footer;
