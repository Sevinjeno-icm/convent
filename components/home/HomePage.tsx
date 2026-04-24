"use client";

import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import AutoAwesomeRoundedIcon from "@mui/icons-material/AutoAwesomeRounded";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
import HealthAndSafetyRoundedIcon from "@mui/icons-material/HealthAndSafetyRounded";
import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import KeyboardArrowRightRoundedIcon from "@mui/icons-material/KeyboardArrowRightRounded";
import LandscapeRoundedIcon from "@mui/icons-material/LandscapeRounded";
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
import { useState } from "react";

const highlights = [
  "Convent-led elder care rooted in dignity and peace",
  "Real campus photography that builds trust from the first click",
  "A warm story-led layout for families, visitors, and volunteers",
];

const pillars = [
  {
    icon: HomeRoundedIcon,
    title: "A peaceful residential setting",
    description:
      "Carmel Oasis feels grounded and restful, with landscaped pathways, open courtyards, and a calm rhythm of life.",
  },
  {
    icon: HealthAndSafetyRoundedIcon,
    title: "Compassionate daily support",
    description:
      "The care story centers on safety, consistency, and the attentive presence of the sisters and the community around them.",
  },
  {
    icon: VolunteerActivismRoundedIcon,
    title: "Faith, service, and belonging",
    description:
      "This is more than a facility page. It communicates a sense of mission, prayerful care, and human connection.",
  },
];

const experiencePoints = [
  {
    eyebrow: "Campus",
    title: "Space to breathe, pray, and feel at home",
    text: "The grounds and gardens create an atmosphere that feels restorative, not institutional. Families can instantly understand the setting through the photo-led storytelling.",
  },
  {
    eyebrow: "Community",
    title: "A place animated by people, not just buildings",
    text: "The group photography highlights volunteers, sisters, guests, and moments of togetherness. That human presence strengthens trust far more than generic marketing language.",
  },
  {
    eyebrow: "Design",
    title: "Modern presentation with gentle emotion",
    text: "The page uses cinematic imagery, layered cards, smooth motion, and clear headings so the site feels reverent, modern, and easy to explore on mobile.",
  },
];

const stats = [
  { value: "5", label: "new campus photos added" },
  { value: "FAQ", label: "structured content for SEO" },
  { value: "Fast", label: "responsive visual storytelling" },
];

const gallery = [
  {
    src: "/photos/carmel-oasis-exterior.jpg",
    title: "Carmel Oasis exterior",
    kicker: "Arrival view",
    alt: "Front exterior view of the Carmel Oasis building with cross-topped domes and landscaped grounds.",
    description:
      "The main building gives the homepage a strong sense of identity and place. It immediately signals permanence, serenity, and sacred purpose.",
  },
  {
    src: "/photos/sisters-front.jpg",
    title: "The sisters at the entrance",
    kicker: "Leadership and care",
    alt: "Five sisters standing in front of the Carmel Oasis entrance garden.",
    description:
      "This portrait grounds the site in real people. It gives visitors a reassuring first impression of the women who shape the home with care and prayer.",
  },
  {
    src: "/photos/community-team.jpg",
    title: "Volunteers and community members",
    kicker: "Shared mission",
    alt: "A group of volunteers and community members gathered together on the Carmel Oasis campus.",
    description:
      "Community involvement brings energy and warmth to the story. It shows that Carmel Oasis is connected to a wider circle of service and support.",
  },
  {
    src: "/photos/garden-view.jpg",
    title: "Kitchen garden and landscape",
    kicker: "Nature and nourishment",
    alt: "A cultivated garden plot at Carmel Oasis with greenery and hills in the background.",
    description:
      "The surrounding land adds a sense of freshness and simplicity. It helps the site feel lived-in, grounded, and close to nature.",
  },
  {
    src: "/photos/visitors-community.jpg",
    title: "Guests and fellowship",
    kicker: "Welcoming spirit",
    alt: "Visitors and sisters gathered together outside the Carmel Oasis building.",
    description:
      "This image adds approachability to the page by showing conversation, welcome, and relationship rather than distance.",
  },
];

const faqs = [
  {
    question: "Why does this homepage help SEO more than the previous version?",
    answer:
      "It now uses specific place-based headings, image alt text, richer metadata, structured FAQ content, and descriptive sections built around the real Carmel Oasis campus instead of generic placeholder copy.",
  },
  {
    question: "How do the new photos improve trust?",
    answer:
      "Real photography helps families, supporters, and search visitors connect the words on the page to an actual community, actual grounds, and actual people involved in the mission.",
  },
  {
    question: "What should be added next for even stronger rankings?",
    answer:
      "Verified contact details, a map pin, local address information, testimonials, and dedicated pages for mission, facilities, activities, and enquiries will strengthen local and long-tail search visibility further.",
  },
];

const fadeUp = (reducedMotion: boolean) => ({
  initial: { opacity: 0, y: reducedMotion ? 0 : 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: reducedMotion ? 0 : 0.75, ease: "easeOut" as const },
});

const HomePage = () => {
  const reducedMotion = Boolean(useReducedMotion());
  const [activePhoto, setActivePhoto] = useState(0);
  const featuredPhoto = gallery[activePhoto];

  return (
    <LazyMotion features={domAnimation}>
      <Box
        component="main"
        sx={{
          overflow: "hidden",
          background:
            "radial-gradient(circle at top left, rgba(132, 96, 60, 0.18), transparent 26%), radial-gradient(circle at right, rgba(108, 135, 97, 0.12), transparent 22%), linear-gradient(180deg, #F8F1E7 0%, #FFFDF9 44%, #F3EADF 100%)",
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
              background: "rgba(122, 62, 43, 0.12)",
            },
            "&::after": {
              bottom: 120,
              left: -120,
              width: 320,
              height: 320,
              background: "rgba(79, 123, 98, 0.16)",
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
                      label="• Pushpasadan Old Age Home"
                      sx={{
                        alignSelf: "flex-start",
                        bgcolor: "rgba(122, 62, 43, 0.1)",
                        color: "primary.dark",
                      }}
                    />
                    <Typography variant="h1">
                      A prayerful , welcoming home where care feels personal and
                      the campus itself tells the story.
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{ maxWidth: 640, color: "text.secondary" }}
                    >
                      This redesigned homepage turns Carmel Oasis into a vivid
                      digital experience with real photos, richer storytelling,
                      better search structure, and a warmer first impression for
                      families, visitors, and supporters.
                    </Typography>
                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                      <Button
                        component={Link}
                        href="/#gallery"
                        variant="contained"
                        endIcon={<KeyboardArrowRightRoundedIcon />}
                      >
                        Explore the Campus
                      </Button>
                      <Button
                        component={Link}
                        href="/#contact"
                        variant="outlined"
                        color="primary"
                      >
                        View Launch Checklist
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
                        boxShadow: "0 30px 80px rgba(43, 33, 26, 0.18)",
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
                            label="Real campus photography"
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
                            A homepage with a sense of place.
                          </Typography>
                          <Typography
                            variant="body2"
                            sx={{ color: "rgba(255,255,255,0.82)", maxWidth: 420 }}
                          >
                            The building, the sisters, the garden, and the
                            community now work together to create an immediate
                            emotional connection.
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
                      {/* <CardContent
                        sx={{
                          p: 2.25,
                          background: "rgba(255,255,255,0.92)",
                        }}
                      > */}
                        {/* <Typography variant="h4" sx={{ mb: 0.5 }}>
                          Face of the mission
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Leadership, care, and welcome are visible the moment a
                          visitor lands on the page.
                        </Typography> */}
                      {/* </CardContent> */}
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
                border: "1px solid rgba(122, 62, 43, 0.08)",
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
                          bgcolor: "rgba(215, 185, 142, 0.16)",
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
                Built to feel reverent, modern, and unmistakably real.
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Instead of sounding like a template, the homepage now reflects a
                genuine convent-run setting. It uses real imagery, specific
                headings, and clear sections to help both search engines and
                people understand what makes this place distinctive.
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
                            bgcolor: "rgba(122, 62, 43, 0.12)",
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
                      Experience design
                    </Typography>
                    <Typography variant="h2">
                      Every section now has a job: trust, clarity, emotion, or
                      discovery.
                    </Typography>
                    <Typography variant="body1" color="text.secondary">
                      Families often decide within seconds whether a care website
                      feels sincere. That is why the redesign leans into visual
                      warmth, softer typography, and a clear path from first
                      impression to deeper exploration.
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
                    Interactive gallery
                  </Typography>
                  <Typography variant="h2">
                    Click through the moments that shape the Carmel Oasis story.
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    This interactive section gives the homepage more life while
                    staying simple and accessible. Each selection updates the
                    featured image and its context without leaving the page.
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
                            : "1px solid rgba(122, 62, 43, 0.12)",
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
                          <Chip icon={<LandscapeRoundedIcon />} label="Photo-led" />
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
                  Search-friendly FAQ
                </Typography>
                <Typography variant="h2">
                  Helpful content for visitors and for search engines.
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  FAQ sections create stronger semantic structure and answer the
                  kinds of questions people often have before contacting a home
                  like this.
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
                  "linear-gradient(135deg, rgba(88,45,31,1) 0%, rgba(79,123,98,0.96) 100%)",
              }}
            >
              <CardContent sx={{ p: { xs: 3, md: 5 } }}>
                <Grid container spacing={4} sx={{ alignItems: "center" }}>
                  <Grid size={{ xs: 12, md: 8 }}>
                    <Stack spacing={2}>
                      <Typography variant="h2" sx={{ color: "common.white" }}>
                        Strong launch foundation, with one more step for local SEO.
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{ color: "rgba(255,255,255,0.84)", maxWidth: 720 }}
                      >
                        The site now looks more alive and much more credible. To
                        push ranking potential even further, add the verified phone
                        number, email address, map location, and a short
                        facilities page next.
                      </Typography>
                    </Stack>
                  </Grid>
                  <Grid size={{ xs: 12, md: 4 }}>
                    <Stack spacing={1.5}>
                      <Chip
                        icon={<AccessTimeRoundedIcon />}
                        label="Add verified contact details"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.14)",
                          color: "common.white",
                          justifyContent: "flex-start",
                        }}
                      />
                      <Chip
                        icon={<PhotoLibraryRoundedIcon />}
                        label="Keep expanding the real gallery"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.14)",
                          color: "common.white",
                          justifyContent: "flex-start",
                        }}
                      />
                      <Chip
                        icon={<PlaceRoundedIcon />}
                        label="Publish address and map embed"
                        sx={{
                          bgcolor: "rgba(255,255,255,0.14)",
                          color: "common.white",
                          justifyContent: "flex-start",
                        }}
                      />
                    </Stack>
                  </Grid>
                </Grid>
                <Divider
                  sx={{ my: 4, borderColor: "rgba(255,255,255,0.18)" }}
                />
                <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                  <Button
                    component={Link}
                    href="/#gallery"
                    variant="contained"
                    color="secondary"
                    sx={{ color: "primary.dark" }}
                  >
                    Review the Gallery
                  </Button>
                  <Button
                    component={Link}
                    href="/#about"
                    variant="outlined"
                    sx={{
                      color: "common.white",
                      borderColor: "rgba(255,255,255,0.34)",
                    }}
                  >
                    Revisit the Story
                  </Button>
                </Stack>
              </CardContent>
            </Card>
          </m.div>
        </Container>
      </Box>
    </LazyMotion>
  );
};

export default HomePage;
