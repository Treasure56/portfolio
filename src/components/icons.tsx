import type { IconType } from "react-icons";
import {
  PiBrowsers,
  PiBuildings,
  PiCertificate,
  PiDeviceMobile,
  PiEnvelopeSimple,
  PiFacebookLogo,
  PiGithubLogo,
  PiGraduationCap,
  PiInstagramLogo,
  PiLinkedinLogo,
  PiRocketLaunch,
  PiSparkle,
  PiTiktokLogo,
  PiTrophy,
  PiYoutubeLogo,
} from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";

export const proofIcons: Record<string, IconType> = {
  diploma: PiGraduationCap,
  certificate: PiCertificate,
  building: PiBuildings,
  rocket: PiRocketLaunch,
  trophy: PiTrophy,
};

/** One icon per service card, in order. */
export const serviceIcons: IconType[] = [PiBrowsers, PiDeviceMobile, PiSparkle];

export const socialIcons: Record<string, IconType> = {
  github: PiGithubLogo,
  linkedin: PiLinkedinLogo,
  x: FaXTwitter,
  facebook: PiFacebookLogo,
  instagram: PiInstagramLogo,
  tiktok: PiTiktokLogo,
  youtube: PiYoutubeLogo,
  email: PiEnvelopeSimple,
};
