// The family of each grammar point, with its pixel icon (ui/icons/pixel-icons.js), shown in Cours › Grammaire.
// tests/content.test.js checks that every grammar point of every language has one.
export const FAMILIES = {
  bases: { label: "Les bases", icon: "book" },
  past: { label: "Le passé", icon: "clock" },
  future: { label: "Le futur", icon: "calendar" },
  talk: { label: "Questions et discours", icon: "chat" },
  verbs: { label: "Verbes et tournures", icon: "pencil" },
  compare: { label: "Comparer et nuancer", icon: "scales" },
  ifs: { label: "Hypothèses et souhaits", icon: "bulb" },
  links: { label: "Relier les idées", icon: "link" },
};
const BY = {
  bases: "tobe havegot articles plurals thereis can bedo possess freq inonat someany simplecont does es_ser_estar es_articulos es_plurales es_hay es_gustar es_presente es_tener_ir es_posesivos es_demostrativos",
  past: "did presperf havebeen while usedto pastperf es_indefinido es_imperfecto es_indef_imperf es_perfecto es_pluscuamperfecto",
  future: "future futperf es_ir_a es_futuro es_subj_cuando",
  talk: "questions tags reported shall es_estilo_indirecto es_imperativo",
  verbs: "particles ingto makedo musthave modals causative passive hightime idioms es_reflexivos es_gerundio es_pronombres_cd es_pronombres_ci es_obligacion es_perifrasis es_verbos_cambio es_pasiva_se es_por_para es_modismos es_registro es_probabilidad",
  compare: "compar rather es_comparativos es_muy_mucho",
  ifs: "cond2 cond3 mixedcond subj es_subj_deseo es_subj_emocion es_subj_impersonal es_condicional es_si_imperfecto es_si_pluscuam es_cond_mixtas es_como_si es_relativo_subj es_de_inf",
  links: "unless although relatives linkers inversion cleft participle es_relativos es_aunque es_conectores es_por_mucho_que",
};
export const FAMILY_OF = Object.fromEntries(Object.entries(BY).flatMap(([f, ids]) => ids.split(" ").map((id) => [id, f])));
