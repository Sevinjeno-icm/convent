"use client";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
import LocalPhoneRoundedIcon from "@mui/icons-material/LocalPhoneRounded";
import PhotoLibraryRoundedIcon from "@mui/icons-material/PhotoLibraryRounded";
import PlaceRoundedIcon from "@mui/icons-material/PlaceRounded";
import VolunteerActivismRoundedIcon from "@mui/icons-material/VolunteerActivismRounded";
import ExpandMoreRoundedIcon from "@mui/icons-material/ExpandMoreRounded";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { LazyMotion, domAnimation, m, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const highlights = [
  "Convent-led care rooted in dignity, prayer, and respect",
  "Peaceful rooms, gardens, companionship, and daily support",
  "A reassuring place for families seeking loving elder care",
];

const pillars = [
  {
    icon: HomeRoundedIcon,
    title: "A home with quiet dignity",
    description:
      "Pushpasadan offers elders a calm residential setting where the day moves gently, the surroundings feel familiar, and every person is treated with respect.",
  },
  {
    icon: HealthAndSafetyRoundedIcon,
    title: "Care for everyday needs",
    description:
      "From meals and personal assistance to attentive supervision, the sisters and care community help residents feel safe, noticed, and supported.",
  },
  {
    icon: VolunteerActivismRoundedIcon,
    title: "Faith, service, and belonging",
    description:
      "Prayer, kindness, shared time, and service shape the atmosphere here, helping elders experience companionship instead of isolation.",
  },
];

const experiencePoints = [
  {
    eyebrow: "Daily care",
    title: "Gentle support through ordinary routines",
    text: "Residents are cared for through regular meals, rest, hygiene support, prayer, conversation, and a steady rhythm that brings comfort to each day.",
  },
  {
    eyebrow: "Family trust",
    title: "A setting families can understand and trust",
    text: "Real people, open spaces, and visible community life help families feel confident that their loved ones are entering a caring and respectful home.",
  },
  {
    eyebrow: "Community",
    title: "A life enriched by visitors and fellowship",
    text: "The home welcomes moments of connection with sisters, volunteers, guests, and well-wishers so residents remain part of a wider circle of love.",
  },
];

const stats = [
  { value: "24/7", label: "caring presence and supervision" },
  { value: "Peace", label: "prayerful convent atmosphere" },
  { value: "Care", label: "meals, companionship, and daily support" },
];

const gallery = [
  {
    src: "/photos/carmel-oasis-exterior.jpg",
    title: "Carmel Oasis exterior",
    kicker: "Arrival view",
    alt: "Front exterior view of the Carmel Oasis building with cross-topped domes and landscaped grounds.",
    description:
      "The entrance reflects a calm and welcoming home where elders can live with dignity, safety, and a sense of belonging.",
  },
  {
    src: "/photos/sisters-front.jpg",
    title: "The sisters at the entrance",
    kicker: "Leadership and care",
    alt: "Five sisters standing in front of the Carmel Oasis entrance garden.",
    description:
      "The sisters bring prayerful service, patience, and personal attention to the life of the home.",
  },
  {
    src: "/photos/community-team.jpg",
    title: "Volunteers and community members",
    kicker: "Shared mission",
    alt: "A group of volunteers and community members gathered together on the Carmel Oasis campus.",
    description:
      "Volunteers and friends add warmth to the home, reminding residents that they are remembered, valued, and loved.",
  },
  {
    src: "/photos/garden-view.jpg",
    title: "Kitchen garden and landscape",
    kicker: "Nature and nourishment",
    alt: "A cultivated garden plot at Carmel Oasis with greenery and hills in the background.",
    description:
      "The garden and open surroundings create a restorative atmosphere where residents can enjoy fresh air, quiet walks, and simple beauty.",
  },
  {
    src: "/photos/visitors-community.jpg",
    title: "Guests and fellowship",
    kicker: "Welcoming spirit",
    alt: "Visitors and sisters gathered together outside the Carmel Oasis building.",
    description:
      "Visits, conversations, and shared moments help make the home feel alive with human connection.",
  },
];

const faqs = [
  {
    question: "What kind of care does Pushpasadan Old Age Home provide?",
    answer:
      "Pushpasadan provides residential elder care in a convent-led setting, with daily support, meals, companionship, prayerful presence, and a peaceful environment for senior residents.",
  },
  {
    question: "Is the home suitable for elders who need companionship?",
    answer:
      "Yes. The home is shaped around belonging, shared routines, visits, prayer, and community life so elders are not left to feel alone.",
  },
  {
    question: "How can families or well-wishers get involved?",
    answer:
      "Families can enquire about care and visits, while well-wishers can support the mission through volunteering, donations, and acts of service. Verified contact details can be added here for direct enquiries.",
  },
];

const contact = {
  address: "Carmel Oasis, Wanjale, Raigad dt.",
  phoneLabel: "+91 8766480884",
  phoneHref: "tel:+918766480884",
  person: "Sr. Anishya",
  mapsEmbed:
    "https://www.google.com/maps?q=Carmel%20Oasis%2C%20Wanjale%2C%20Raigad&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Carmel%20Oasis%2C%20Wanjale%2C%20Raigad",
};

const fadeUp = (reducedMotion: boolean) => ({
  initial: { opacity: 0, y: reducedMotion ? 0 : 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: reducedMotion ? 0 : 0.75, ease: "easeOut" as const },
});

const HomePage = () => {
  const prefersReducedMotion = useReducedMotion();
  const [reducedMotion, setReducedMotion] = useState(false);
  const [activePhoto, setActivePhoto] = useState(0);
  const featuredPhoto = gallery[activePhoto];

  useEffect(() => {
    setReducedMotion(Boolean(prefersReducedMotion));
  }, [prefersReducedMotion]);

  return (
    <LazyMotion features={domAnimation}>
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(93, 150, 152, 0.20), transparent 26%), radial-gradient(circle at right, rgba(111, 160, 107, 0.14), transparent 22%), linear-gradient(180deg, #EEF8F5 0%, #FFFDF8 48%, #EAF4EE 100%)",
            width:"100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            isolation: "isolate",
            "&::before, &::after": {
              content: '""',
              position: "absolute",
              borderRadius: "50%",
              filter: "blur(40px)",
              zIndex: -1,
            },
            "&::before": {
              top: 48,
              right: -120,
              width: 340,
              height: 340,
              background: "rgba(47, 111, 115, 0.13)",
            },
            "&::after": {
              bottom: 120,
              left: -120,
              width: 320,
              height: 320,
              background: "rgba(111, 160, 107, 0.18)",
            },
          }}
        >
          {/* <Container sx={{ pt: { xs: 6, md: 10 }, pb: { xs: 8, md: 12 } }}> */}
            <Container maxWidth="xl" sx={{ pt: { xs: 6, md: 3 }, pb: { xs: 8, md: 12 } }}>

            <Grid
              container
              spacing={{ xs: 5, md: 2 }}
              sx={{ alignItems: "center" }}
            >
              <Grid size={{ xs: 12, md: 6 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Stack spacing={3}>
                    <Chip
                      label="Pushpasadan Old Age Home"
                      sx={{
                        alignSelf: "flex-start",
                        bgcolor: "rgba(47, 111, 115, 0.11)",
                        color: "primary.dark",
                      }}
                    />
                    <Typography variant="h1">
                      A peaceful old age home where elders are cared for with
                      dignity, prayer, and love.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ maxWidth: 640, color: "text.secondary" }}
                    >
                      Carmel Oasis at Pushpasadan is a convent-led home for
                      senior residents, offering a calm place to live, gentle
                      daily support, companionship, and the reassurance of a
                      caring community.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Button
                        component={Link}
                        href="/#gallery"
                        variant="contained"
                        endIcon={<KeyboardArrowRightRoundedIcon />}
                      >
                        Explore the Home
                      </Button>
                      <Button
                        component={Link}
                        href="/#contact"
                        variant="outlined"
                        color="primary"
                      >
                        Make an Enquiry
                      </Button>
                    </Stack>
                    <Stack spacing={1.5}>
                      {highlights.map((item) => (
                        <Stack
                          key={item}
                          direction="row"
                          spacing={1.5}
                          sx={{ alignItems: "center" }}
                        >
                          <FavoriteRoundedIcon color="primary" fontSize="small" />
                          <Typography variant="body2">{item}</Typography>
                        </Stack>
                      ))}
                    </Stack>
                  </Stack>
                </m.div>
              </Grid>

              <Grid size={{ xs: 12, md: 6 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Box sx={{ position: "relative", minHeight: { xs: 460, md: 620 }, width:"100%" } }>
                    <Card
                      sx={{
                        position: "relative",
                        overflow: "hidden",
                        minHeight: { xs: 420, md: 560 },
                        borderRadius: 2,
                        boxShadow: "0 30px 80px rgba(31, 63, 61, 0.18)",
                      }}
                    >
                      <Box sx={{ position: "absolute", inset: 0 }}>
                        <Image
                          src="/photos/carmel-oasis-exterior.jpg"
                          alt="Front view of Carmel Oasis surrounded by landscaped paths and palm trees."
                          fill
                          priority
                          sizes="(max-width: 900px) 100vw, 50vw"
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                      <Box
                        sx={{
                          position: "absolute",
                          inset: 0,
                          background:
                            "linear-gradient(180deg, rgba(32,24,17,0.04) 0%, rgba(32,24,17,0.68) 100%)",
                        }}
                      />
                      <Stack
                        spacing={2}
                        sx={{
                          position: "relative",
                          zIndex: 1,
                          height: "100%",
                          justifyContent: "space-between",
                          p: { xs: 2.5, md: 3.5 },
                          color: "common.white",
                        }}
                      >
                        <Stack direction="row" sx={{ justifyContent: "space-between" }}>
                          <Chip
                            label="Peaceful convent campus"
                            sx={{
                              bgcolor: "rgba(255,255,255,0.14)",
                              color: "common.white",
                            }}
                          />
                          <Avatar sx={{ bgcolor: "rgba(255,255,255,0.16)" }}>
                            <PhotoLibraryRoundedIcon />
                          </Avatar>
                        </Stack>
                        <Stack spacing={2}>
                          <Typography variant="h3" sx={{ color: "inherit" }}>
                            A quiet place to feel safe, seen, and at home.
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.82)", maxWidth: 420 }}
                          >
                            The building, the sisters, the garden, and the
                            community together create a gentle atmosphere for
                            elders who deserve care with patience and respect.
                          </Typography>
                        </Stack>
                      </Stack>
                    </Card>

                    <Card
                      sx={{
                        position: "absolute",
                        right: { xs: 16, md: -20 },
                        bottom: { xs: -8, md: 24 },
                        width: { xs: "72%", sm: 320, md: 340 },
                        overflow: "hidden",
                        borderRadius: 1,
                        border: "1px solid rgba(255,255,255,0.7)",
                        backdropFilter: "blur(16px)",
                      }}
                    >
                      <Box sx={{ position: "relative", height: { xs: 180, md: 220 } }}>
                        <Image
                          src="/photos/sisters-front.jpg"
                          alt="The sisters standing together in front of the Carmel Oasis entrance."
                          fill
                          sizes="(max-width: 900px) 72vw, 340px"
                          style={{ objectFit: "cover" }}
                        />
                      </Box>
                    </Card>
                  </Box>
                </m.div>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ pb: { xs: 7, md: 10 } }}>
          <m.div {...fadeUp(reducedMotion)}>
            <Card
              sx={{
                bgcolor: "rgba(255,255,255,0.76)",
                border: "1px solid rgba(47, 111, 115, 0.10)",
              }}
            >
              <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                <Grid container spacing={2}>
                  {stats.map((stat) => (
                    <Grid key={stat.label} size={{ xs: 12, sm: 4 }}>
                      <Box
                        sx={{
                          borderRadius: 4,
                          px: 2,
                          py: 2.5,
                          bgcolor: "rgba(230, 177, 126, 0.16)",
                          textAlign: { xs: "left", sm: "center" },
                        }}
                      >
                        <Typography variant="h3" color="primary.main">
                          {stat.value}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          {stat.label}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </CardContent>
            </Card>
          </m.div>
        </Container>

        <Container sx={{ py: { xs: 7, md: 10 } }} id="about">
          <m.div {...fadeUp(reducedMotion)}>
            <Stack spacing={2} sx={{ mb: 5, maxWidth: 760 }}>
              <Typography
                variant="overline"
                sx={{ color: "primary.main", letterSpacing: "0.12em" }}
              >
                About Carmel Oasis
              </Typography>
              <Typography variant="h2">
                A convent-led home shaped by compassion and service.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Carmel Oasis at Pushpasadan Old Age Home is a place where
                senior residents can live with peace, routine, prayer, and
                personal attention. The home is guided by the sisters and
                supported by a community that believes every elder deserves
                dignity, companionship, and tenderness.
              </Typography>
            </Stack>
          </m.div>

          <Grid container spacing={3}>
            {pillars.map(({ icon: Icon, title, description }) => (
              <Grid key={title} size={{ xs: 12, md: 4 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Card sx={{ height: "100%", bgcolor: "rgba(255,255,255,0.84)" }}>
                    <CardContent sx={{ p: 3.5 }}>
                      <Stack spacing={2}>
                        <Avatar
                          sx={{
                            width: 56,
                            height: 56,
                            bgcolor: "rgba(47, 111, 115, 0.12)",
                            color: "primary.main",
                          }}
                        >
                          <Icon />
                        </Avatar>
                        <Typography variant="h3">{title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ bgcolor: "rgba(255,255,255,0.56)" }} id="services">
          <Container sx={{ py: { xs: 7, md: 10 } }}>
            <Grid container spacing={{ xs: 4, md: 5 }}>
              <Grid size={{ xs: 12, md: 5 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Stack spacing={2.5}>
                    <Typography
                      variant="overline"
                      sx={{ color: "primary.main", letterSpacing: "0.12em" }}
                    >
                      Care and daily life
                    </Typography>
                    <Typography variant="h2">
                      Meaningful care is found in the small things repeated
                      every day.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      A good old age home is not only about buildings. It is
                      about meals served with care, someone present when help is
                      needed, peaceful surroundings, prayer, conversation, and
                      the comfort of being remembered.
                    </Typography>
                  </Stack>
                </m.div>
              </Grid>

              <Grid size={{ xs: 12, md: 7 }}>
                <Stack spacing={2.5}>
                  {experiencePoints.map((item) => (
                    <m.div key={item.title} {...fadeUp(reducedMotion)}>
                      <Card>
                        <CardContent sx={{ p: 3.5 }}>
                          <Stack spacing={1.2}>
                            <Typography
                              variant="overline"
                              sx={{ color: "primary.main", letterSpacing: "0.12em" }}
                            >
                              {item.eyebrow}
                            </Typography>
                            <Typography variant="h3">{item.title}</Typography>
                            <Typography variant="body2" color="text.secondary">
                              {item.text}
                            </Typography>
                          </Stack>
                        </CardContent>
                      </Card>
                    </m.div>
                  ))}
                </Stack>
              </Grid>
            </Grid>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 7, md: 10 } }} id="gallery">
          <Grid container spacing={{ xs: 4, md: 5 }} sx={{ alignItems: "stretch" }}>
            <Grid size={{ xs: 12, md: 5 }}>
              <m.div {...fadeUp(reducedMotion)}>
                <Stack spacing={2}>
                  <Typography
                    variant="overline"
                    sx={{ color: "primary.main", letterSpacing: "0.12em" }}
                  >
                    Life at the home
                  </Typography>
                  <Typography variant="h2">
                    Glimpses of the people and places that make Carmel Oasis
                    feel personal.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    Explore the campus, gardens, sisters, visitors, and
                    community moments that show the gentle spirit of Pushpasadan
                    Old Age Home.
                  </Typography>
                </Stack>
              </m.div>

              <Stack spacing={1.5} sx={{ mt: 4 }}>
                {gallery.map((item, index) => (
                  <m.div key={item.title} {...fadeUp(reducedMotion)}>
                    <Button
                      fullWidth
                      onClick={() => setActivePhoto(index)}
                      variant={activePhoto === index ? "contained" : "text"}
                      color={activePhoto === index ? "primary" : "inherit"}
                      sx={{
                        justifyContent: "space-between",
                        px: 2.25,
                        py: 1.75,
                        borderRadius: 4,
                        border:
                          activePhoto === index
                            ? "1px solid transparent"
                            : "1px solid rgba(47, 111, 115, 0.14)",
                        bgcolor:
                          activePhoto === index
                            ? "primary.main"
                            : "rgba(255,255,255,0.68)",
                        color: activePhoto === index ? "common.white" : "text.primary",
                      }}
                    >
                      <Stack spacing={0.3} sx={{ textAlign: "left" }}>
                        <Typography variant="body2" sx={{ fontWeight: 800 }}>
                          {item.kicker}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            color:
                              activePhoto === index
                                ? "rgba(255,255,255,0.82)"
                                : "text.secondary",
                          }}
                        >
                          {item.title}
                        </Typography>
                      </Stack>
                      <KeyboardArrowRightRoundedIcon />
                    </Button>
                  </m.div>
                ))}
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 7 }}>
              <m.div {...fadeUp(reducedMotion)}>
                <Card
                  sx={{
                    overflow: "hidden",
                    bgcolor: "rgba(255,255,255,0.9)",
                  }}
                >
                  <Box sx={{ position: "relative", height: { xs: 320, md: 500 } }}>
                    <Image
                      src={featuredPhoto.src}
                      alt={featuredPhoto.alt}
                      fill
                      sizes="(max-width: 900px) 100vw, 58vw"
                      style={{ objectFit: "cover" }}
                    />
                  </Box>
                  <CardContent sx={{ p: { xs: 2.5, md: 3.5 } }}>
                    <Stack spacing={2}>
                      <Stack
                        direction={{ xs: "column", sm: "row" }}
                        spacing={1.5}
                        sx={{ justifyContent: "space-between" }}
                      >
                        <Chip
                          icon={<AutoAwesomeRoundedIcon />}
                          label={featuredPhoto.kicker}
                          sx={{ alignSelf: "flex-start" }}
                        />
                        <Stack direction="row" spacing={1}>
                          <Chip icon={<PlaceRoundedIcon />} label="Carmel Oasis" />
                          <Chip icon={<LandscapeRoundedIcon />} label="Peaceful campus" />
                        </Stack>
                      </Stack>
                      <Typography variant="h3">{featuredPhoto.title}</Typography>
                      <Typography variant="body1" color="text.secondary">
                        {featuredPhoto.description}
                      </Typography>
                    </Stack>
                  </CardContent>
                </Card>
              </m.div>
            </Grid>
          </Grid>
        </Container>

        <Container sx={{ py: { xs: 4, md: 6 } }} id="stories">
          <Grid container spacing={3}>
            {gallery.map((item) => (
              <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4 }}>
                <m.div {...fadeUp(reducedMotion)}>
                  <Card
                    sx={{
                      height: "100%",
                      overflow: "hidden",
                      bgcolor: "rgba(255,255,255,0.86)",
                    }}
                  >
                    <Box sx={{ position: "relative", height: 240 }}>
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                        style={{ objectFit: "cover" }}
                      />
                    </Box>
                    <CardContent sx={{ p: 2.5 }}>
                      <Stack spacing={1}>
                        <Typography
                          variant="overline"
                          sx={{ color: "primary.main", letterSpacing: "0.12em" }}
                        >
                          {item.kicker}
                        </Typography>
                        <Typography variant="h4">{item.title}</Typography>
                        <Typography variant="body2" color="text.secondary">
                          {item.description}
                        </Typography>
                      </Stack>
                    </CardContent>
                  </Card>
                </m.div>
              </Grid>
            ))}
          </Grid>
        </Container>

        <Box sx={{ bgcolor: "rgba(255,255,255,0.56)" }}>
          <Container sx={{ py: { xs: 7, md: 10 } }}>
            <m.div {...fadeUp(reducedMotion)}>
              <Stack spacing={2} sx={{ mb: 4, maxWidth: 760 }}>
                <Typography
                  variant="overline"
                  sx={{ color: "primary.main", letterSpacing: "0.12em" }}
                >
                  Questions families ask
                </Typography>
                <Typography variant="h2">
                  Clear answers for families, visitors, and well-wishers.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  Choosing an old age home is an emotional decision. These
                  answers help families understand the care, atmosphere, and
                  ways to connect with the mission.
                </Typography>
              </Stack>
            </m.div>

            <Stack spacing={2}>
              {faqs.map((item) => (
                <m.div key={item.question} {...fadeUp(reducedMotion)}>
                  <Accordion
                    disableGutters
                    sx={{
                      bgcolor: "rgba(255,255,255,0.88)",
                      borderRadius: "24px !important",
                      px: 1,
                      "&::before": { display: "none" },
                    }}
                  >
                    <AccordionSummary expandIcon={<ExpandMoreRoundedIcon />}>
                      <Typography variant="h4">{item.question}</Typography>
                    </AccordionSummary>
                    <AccordionDetails sx={{ pt: 0 }}>
                      <Typography variant="body2" color="text.secondary">
                        {item.answer}
                      </Typography>
                    </AccordionDetails>
                  </Accordion>
                </m.div>
              ))}
            </Stack>
          </Container>
        </Box>

        <Container sx={{ py: { xs: 8, md: 12 } }} id="contact">
          <m.div {...fadeUp(reducedMotion)}>
            <Card
              sx={{
                overflow: "hidden",
                background:
                  "radial-gradient(circle at top left, rgba(93,150,152,0.18), transparent 34%), linear-gradient(135deg, #F9FEFB 0%, #EEF8F5 55%, #F7F2EA 100%)",
                border: "1px solid rgba(47, 111, 115, 0.12)",
                boxShadow: "0 30px 90px rgba(31, 63, 61, 0.12)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={2}>
                      <Chip
                        label="Contact and directions"
                        sx={{
                          alignSelf: "flex-start",
                          bgcolor: "rgba(47, 111, 115, 0.1)",
                          color: "primary.dark",
                        }}
                      />
                      <Typography variant="h2" sx={{ color: "primary.dark" }}>
                        Looking for a caring old age home for someone you love?
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "text.secondary", maxWidth: 720 }}
                      >
                        Reach out to learn more about life at Pushpasadan,
                        visiting possibilities, resident care, and ways to
                        support the sisters in their service to elders.
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={1.5}>
                      <Chip
                        icon={<AccessTimeRoundedIcon />}
                        label="Resident care enquiries"
                        sx={{
                          bgcolor: "rgba(47, 111, 115, 0.1)",
                          color: "primary.dark",
                          justifyContent: "flex-start",
                        }}
                      />
                      <Chip
                        icon={<PhotoLibraryRoundedIcon />}
                        label="Family visits and fellowship"
                        sx={{
                          bgcolor: "rgba(111, 160, 107, 0.12)",
                          color: "primary.dark",
                          justifyContent: "flex-start",
                        }}
                      />
                      <Chip
                        icon={<PlaceRoundedIcon />}
                        label="Volunteering and support"
                        sx={{
                          bgcolor: "rgba(230, 177, 126, 0.18)",
                          color: "primary.dark",
                          justifyContent: "flex-start",
                        }}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Divider
                  sx={{ my: 4, borderColor: "rgba(47, 111, 115, 0.12)" }}
                />
                <Grid container spacing={3}>
                  <Grid size={{ xs: 12, md: 5 }}>
                    <Stack spacing={2.5}>
                      <Box
                        sx={{
                          borderRadius: 3,
                          bgcolor: "rgba(255,255,255,0.82)",
                          border: "1px solid rgba(47, 111, 115, 0.12)",
                          boxShadow: "0 18px 50px rgba(31, 63, 61, 0.07)",
                          p: 2.5,
                        }}
                      >
                        <Stack spacing={1}>
                          <Typography
                            variant="overline"
                            sx={{
                              color: "primary.main",
                              letterSpacing: "0.12em",
                            }}
                          >
                            Address
                          </Typography>
                          <Stack direction="row" spacing={1.5}>
                            <PlaceRoundedIcon sx={{ color: "primary.main", mt: 0.3 }} />
                            <Typography variant="body1" sx={{ color: "text.primary" }}>
                              {contact.address}
                            </Typography>
                          </Stack>
                        </Stack>
                      </Box>

                      <Box
                        sx={{
                          borderRadius: 3,
                          bgcolor: "rgba(255,255,255,0.82)",
                          border: "1px solid rgba(47, 111, 115, 0.12)",
                          boxShadow: "0 18px 50px rgba(31, 63, 61, 0.07)",
                          p: 2.5,
                        }}
                      >
                        <Stack spacing={1}>
                          <Typography
                            variant="overline"
                            sx={{
                              color: "primary.main",
                              letterSpacing: "0.12em",
                            }}
                          >
                            Contact
                          </Typography>
                          <Stack direction="row" spacing={1.5}>
                            <LocalPhoneRoundedIcon
                              sx={{ color: "primary.main", mt: 0.3 }}
                            />
                            <Box>
                              <Typography variant="body1" sx={{ color: "text.primary" }}>
                                {contact.person}
                              </Typography>
                              <Typography
                                component="a"
                                href={contact.phoneHref}
                                variant="h4"
                                sx={{
                                  color: "primary.dark",
                                  textDecoration: "none",
                                }}
                              >
                                {contact.phoneLabel}
                              </Typography>
                            </Box>
                          </Stack>
                        </Stack>
                      </Box>

                      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button
                          component="a"
                          href={contact.phoneHref}
                          variant="contained"
                        >
                          Call Sr. Anishya
                        </Button>
                        <Button
                          component="a"
                          href={contact.mapsLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="outlined"
                          sx={{
                            color: "primary.dark",
                            borderColor: "rgba(47, 111, 115, 0.28)",
                            bgcolor: "rgba(255,255,255,0.45)",
                          }}
                        >
                          Open Google Maps
                        </Button>
                      </Stack>
                    </Stack>
                  </Grid>

                  <Grid size={{ xs: 12, md: 7 }}>
                    <Box
                      sx={{
                        overflow: "hidden",
                        borderRadius: 3,
                        border: "1px solid rgba(47, 111, 115, 0.14)",
                        bgcolor: "rgba(255,255,255,0.86)",
                        boxShadow: "0 18px 50px rgba(31, 63, 61, 0.09)",
                        minHeight: { xs: 320, md: 380 },
                      }}
                    >
                      <Box
                        component="iframe"
                        title="Google map showing Carmel Oasis, Wanjale, Raigad"
                        src={contact.mapsEmbed}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        sx={{
                          display: "block",
                          width: "100%",
                          height: { xs: 320, md: 380 },
                          border: 0,
                        }}
                      />
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </m.div>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default HomePage;
