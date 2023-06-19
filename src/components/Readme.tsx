import { useState } from "react";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Link,
} from "@mui/material";
import FilterAltOffIcon from "@mui/icons-material/FilterAltOff";
// https://www.anses.fr/fr/content/complements-alimentaires-plantes-meilleure-information-des-consommateurs?trk=feed_main-feed-card_reshare_feed-article-content

export default function Readme() {
  const [open, setOpen] = useState(true);
  return (
    <Dialog open={open} maxWidth="md">
      <DialogTitle id="alert-dialog-title">Avertissement</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Stack spacing={1}>
            <Typography sx={{ color: "error.main", fontWeight: "bold" }}>
              Cette page web est une adaptation par{" "}
              <Link
                href="https://www.linkedin.com/in/yann-beauxis/"
                target="_blank"
              >
                Yann Beauxis
              </Link>{" "}
              à titre expérimental du
              <Link
                href="https://www.anses.fr/fr/content/complements-alimentaires-plantes-meilleure-information-des-consommateurs?trk=feed_main-feed-card_reshare_feed-article-content"
                target="_blank"
              >
                {" "}
                "tableau d’information sur les plantes médicinales utilisées
                dans des compléments alimentaires nécessitant des précautions
                d’emploi"
              </Link>{" "}
              en date du 19 juin 2023. Cette page web a été réalisée
              indépendamment de l'ANSES et des experts qui ont participés à la
              rédaction de l'avis.
            </Typography>
            <Typography>
              Le code source est disponible sur{" "}
              <Link
                href="https://github.com/YannBeauxis/anses-ca"
                target="_blank"
              >
                GitHub
              </Link>
              .
            </Typography>

            <Typography sx={{ fontWeight: "bold", fontSize: "1.2em" }}>
              Guide d'utilisation
            </Typography>
            <Typography>
              Ce document récapitulatif est un extraits d'informations utiles
              pour la délivrance de compléments alimentaires à base de plantes.
              On retrouve un extrait d'élements retrouvables dans l'avis
              2019-SA-0155 en annexe IV.
            </Typography>
            <Typography>
              Les informations disponibles dans cet outil sont relatives aux
              contre-indications, aux interactions médicamenteuses, aux
              restrictions pour les populations spécifiques (femmes enceintes ou
              allaitantes ou populations pédiatriques) des plantes dans les
              compléments alimentaires .
            </Typography>
            <Typography sx={{ color: "error.main", fontWeight: "bold" }}>
              Ces travaux ne constituent pas une évaluation des risques relatifs
              à la sécurité d'emploi de chaque plante dans les compléments
              alimentaires mais à une analyse des avertissements et
              recommandations existants dans les monographies de plantes
              médicinales de l'EMA pouvant être extrapolées aux compléments
              alimentaires contenant ces mêmes plantes.
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Pour l'utilisation de plantes dans les CA chez les populations
              pédiatriques:
            </Typography>
            <Typography>
              Un usage médicamenteux a été retenu dans le cas de situations
              cliniques bénignes n’étant pas associées à des risques majeurs de
              complications, compte tenu d’un recul d’utilisation suffisant Dans
              ce cas-là, des posologies spécifiques sont proposées. Pour ces
              plantes, le GT retient un usage possible uniquement dans les
              conditions précisées dans la monographie, à savoir pour un type de
              préparation et un niveau d’exposition équivalents à ceux de
              l’usage thérapeutique. Il est nécessaire de se référer au tableau
              5 "Plantes bénéficiant d'un usage pédiatrique dans les médicaments
              à base de plante et niveau d'exposition" (p.21) de l'avis.
            </Typography>
            <Typography sx={{ fontWeight: "bold" }}>
              Pour étudier une ou plusieurs plantes :
            </Typography>
            <Typography>
              1. Choissiez la ou les plantes parmi la sélection par leur nom
              vernaculaire (filtre vert) ou par leur nom scientifique (filtre
              bleu). Les composants sélectionné apparaissent en vert (nom
              vernaculaire) ou en bleu (nom scientifique).
              <br />
              2. Pour effacer les filtres cliquer sur le bouton{" "}
              <FilterAltOffIcon />
            </Typography>
          </Stack>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => setOpen(false)}>OK</Button>
      </DialogActions>
    </Dialog>
  );
}
