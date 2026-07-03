import Partner from "./Partner";
import AWS from "/partnersLogos/AWS-logo.webp";
import Fortinet from "/partnersLogos/Fortinet-logo.webp";
import Google from "/partnersLogos/Google-logo.webp";
import Linux from "/partnersLogos/Linux-logo.webp";
import Microsoft from "/partnersLogos/Microsoft-logo.webp";
import Azure from "/partnersLogos/Microsoft-Azure-logo.webp";
import Terraform from "/partnersLogos/Terraform-logo.webp";
import VMWare from "/partnersLogos/VMWare-logo.webp";
import { useTranslation } from "react-i18next";

export default function Partners() {
  const { t } = useTranslation();
  return (
    <section className="bg-black flex flex-col px-10 py-15 justify-center items-center gap-y-12">
      <h2 className="md:text-t2 max-md:text-t3">{t("home.partners.title")}</h2>
      <div
        className="
    grid
    gap-12
    justify-center
    xl:grid-cols-8
    lg:grid-cols-4
    md:grid-cols-3
    max-md:grid-cols-2
  "
      >
        <Partner src={AWS} alt="AWS" />
        <Partner src={Azure} alt="Azure" />
        <Partner src={Google} alt="Google" />
        <Partner src={Microsoft} alt="Microsoft" />
        <Partner src={Terraform} alt="Terraform" />
        <Partner src={VMWare} alt="VMWare" />
        <Partner src={Linux} alt="Linux" />
        <Partner src={Fortinet} alt="Fortinet" />
      </div>
    </section>
  );
}
