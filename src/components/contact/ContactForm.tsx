import { Phone, Mail } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const FORMSPREE = "https://formspree.io/f/mbdvogyq"; // Ton lien Formspree CyberSky

type Tab = "callback" | "message";

export default function ContactForm() {
  const [activeTab, setActiveTab] = useState<Tab>("callback");
  const { t } = useTranslation();

  return (
    <div className="rounded-2xl border border-white/10 bg-[#111111] p-1">
      {/* Tab switcher */}
      <div className="mb-1 grid grid-cols-2 rounded-xl bg-white/5 p-1">
        <button
          onClick={() => setActiveTab("callback")}
          className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${
            activeTab === "callback"
              ? "bg-white text-black shadow"
              : "text-white/50 hover:text-white"
          }`}
        >
          <Phone className="w-4 h-4" />
          {t("contact.tab_callback")}
        </button>
        <button
          onClick={() => setActiveTab("message")}
          className={`flex items-center justify-center gap-2 rounded-lg px-4 py-2.5 text-t5 font-medium transition-all duration-200 ${
            activeTab === "message"
              ? "bg-white text-black shadow"
              : "text-white/50 hover:text-white"
          }`}
        >
          <Mail className="w-4 h-4" />
          {t("contact.tab_message")}
        </button>
      </div>

      <div className="p-5">
        {activeTab === "callback" ? <CallbackForm /> : <MessageForm />}
      </div>
    </div>
  );
}

function CallbackForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [tel, setTel] = useState("");
  const [sujet, setSujet] = useState("");
  const [jour, setJour] = useState("");
  const [horaire, setHoraire] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const { t } = useTranslation();

  const subjects = [
    t("contact.subjects.audit"),
    t("contact.subjects.dev"),
    t("contact.subjects.consulting"),
    t("contact.subjects.infra"),
    t("contact.subjects.other"),
  ];

  const timeSlots = [
    "9h30 – 10h30",
    "10h30 – 11h30",
    "11h30 – 12h30",
    "14h00 – 15h00",
    "15h00 – 16h00",
    "16h00 – 17h00",
    "17h00 – 18h00",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ nom, prenom, tel, sujet, horaire }),
    });

    if (res.ok) {
      setStatus("sent");
      setNom("");
      setPrenom("");
      setTel("");
      setSujet("");
      setHoraire("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label={t("contact.form.last_name")}
          placeholder="Dupont"
          value={nom}
          onChange={setNom}
        />
        <Field
          label={t("contact.form.first_name")}
          placeholder="Jean"
          value={prenom}
          onChange={setPrenom}
        />
      </div>
      <Field
        label={t("contact.form.phone")}
        placeholder="+33 6 12 34 56 78"
        type="tel"
        value={tel}
        onChange={setTel}
      />
      <SelectField
        label={t("contact.form.subject_call")}
        options={subjects}
        value={sujet}
        onChange={setSujet}
        defaultText={t("contact.form.select")}
      />
      <SelectField
        label={t("contact.form.time_slot")}
        options={timeSlots}
        value={horaire}
        onChange={setHoraire}
        defaultText={t("contact.form.select")}
      />

      <Field
        label={t("contact.form.callDayLabel")}
        placeholder="JJ/MM/AAAA"
        type="date"
        value={jour}
        onChange={setJour}
        className="scheme-dark"
      />

      {status === "sent" && (
        <p className="text-sm text-green-400 text-center">
          {t("contact.form.success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          {t("contact.form.error")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-sm font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
      >
        <Phone className="w-4 h-4" />
        {status === "sending"
          ? t("contact.form.sending")
          : t("contact.form.btn_call")}
      </button>
    </form>
  );
}

function MessageForm() {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [email, setEmail] = useState("");
  const [sujet, setSujet] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle",
  );

  const { t } = useTranslation();

  const subjects = [
    t("contact.subjects.audit"),
    t("contact.subjects.dev"),
    t("contact.subjects.consulting"),
    t("contact.subjects.infra"),
    t("contact.subjects.other"),
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({ nom, prenom, email, sujet, message }),
    });

    if (res.ok) {
      setStatus("sent");
      setNom("");
      setPrenom("");
      setEmail("");
      setSujet("");
      setMessage("");
    } else {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <Field
          label={t("contact.form.last_name")}
          placeholder="Dupont"
          value={nom}
          onChange={setNom}
        />
        <Field
          label={t("contact.form.first_name")}
          placeholder="Jean"
          value={prenom}
          onChange={setPrenom}
        />
      </div>
      <Field
        label={t("contact.form.email")}
        placeholder="jean@exemple.com"
        type="email"
        value={email}
        onChange={setEmail}
      />
      <SelectField
        label={t("contact.form.subject_msg")}
        options={subjects}
        value={sujet}
        onChange={setSujet}
        defaultText={t("contact.form.select")}
      />

      <div className="flex flex-col gap-1.5">
        <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
          {t("contact.form.message_label")}
        </label>
        <textarea
          rows={4}
          placeholder={t("contact.form.message_placeholder")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8"
        />
      </div>

      {status === "sent" && (
        <p className="text-sm text-green-400 text-center">
          {t("contact.form.success")}
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400 text-center">
          {t("contact.form.error")}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-t5 font-semibold text-black transition hover:bg-white/90 active:scale-[0.98] disabled:opacity-50"
      >
        <Mail className="w-4 h-4" />
        {status === "sending"
          ? t("contact.form.sending")
          : t("contact.form.btn_message")}
      </button>
    </form>
  );
}

function Field({
  label,
  placeholder,
  type = "text",
  value,
  onChange,
  className = "", // 1. On accepte la prop (vide par défaut)
}: {
  label: string;
  placeholder: string;
  type?: string;
  value: string;
  onChange: (v: string) => void;
  className?: string; // 2. On déclare le type pour apaiser TypeScript
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white placeholder:text-white/25 outline-none transition focus:border-white/30 focus:bg-white/8 ${className}`}
      />
    </div>
  );
}

function SelectField({
  label,
  options,
  value,
  onChange,
  defaultText,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (v: string) => void;
  defaultText: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-t6 font-medium uppercase tracking-widest text-white/50">
        {label}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-t5 text-white outline-none transition focus:border-white/30 focus:bg-white/8"
      >
        <option value="" disabled className="bg-[#111] text-white/50">
          {defaultText}
        </option>
        {options.map((o) => (
          <option key={o} value={o} className="bg-[#111] text-white">
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}
