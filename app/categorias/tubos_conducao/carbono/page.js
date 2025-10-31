import { notFound } from "next/navigation";
import {venus} from "@/app/layout.js"
import Navbar from "@/app/sections/navbar.js"
import Footer from "@/app/sections/footer.js"
import api from "@/utils/api.js"
import Image from "next/image"
import TabelaTubosCarbono from "@/components/tabela_tubos_carbono.js"
import TabelaTubos from "@/components/tabela_tubos_carbono.js";

// Dados das tabelas

// NBR L e NBR M

const cols_nbr_l = ["DIÂMETRO NOMINAL (POL.)", "DIÂMETRO EXTERNO (M.M.)", "X", "ESP. DA PAREDE (M.M.)", "PESO TEÓRICO (KG/6M) PRETO", "PESO TEÓRICO (KG/6M) GALV."]

const rows_nbr_l = [
  { diamNom: "1/4\"", diamExt: "13,50",x: "x", espParede: "2,00", pesoPreto: 3.45, pesoGalv: null },
  { diamNom: "3/8\"", diamExt: "17,20",x: "x", espParede: "2,00", pesoPreto: 4.50, pesoGalv: 4.80 },
  { diamNom: "1/2\"", diamExt: "21,30",x: "x", espParede: "2,25", pesoPreto: 6.46, pesoGalv: 6.86 },
  { diamNom: "3/4\"", diamExt: "26,90",x: "x", espParede: "2,25", pesoPreto: 8.30, pesoGalv: 8.79 },
  { diamNom: "1\"", diamExt: "33,70",x: "x", espParede: "2,65", pesoPreto: 12.29, pesoGalv: 12.81 },
  { diamNom: "1.1/4\"", diamExt: "42,40",x: "x", espParede: "2,65", pesoPreto: 15.81, pesoGalv: 16.64 },
  { diamNom: "1.1/2\"", diamExt: "48,30",x: "x", espParede: "3,00", pesoPreto: 20.36, pesoGalv: 21.33 },
  { diamNom: "2\"", diamExt: "60,30",x: "x", espParede: "3,00", pesoPreto: 25.74, pesoGalv: 26.97 },
  { diamNom: "2.1/2\"", diamExt: "76,10",x: "x", espParede: "3,35", pesoPreto: 36.45, pesoGalv: 38.04 },
  { diamNom: "3\"", diamExt: "88,90",x: "x", espParede: "3,35", pesoPreto: 42.86, pesoGalv: 44.74 },
  { diamNom: "4\"", diamExt: "114,30",x: "x", espParede: "3,75", pesoPreto: 61.98, pesoGalv: 64.47 },
];

const rows_nbr_m = [
  { diamNom: "1/4\"",   diamExt: "13,50", x: "X", espParede: "2,25", pesoPreto: 3.90,  pesoGalv: null   },
  { diamNom: "3/8\"",   diamExt: "17,20", x: "X", espParede: "2,25", pesoPreto: 5.16,  pesoGalv: 5.52   },
  { diamNom: "1/2\"",   diamExt: "21,30", x: "X", espParede: "2,65", pesoPreto: 7.56,  pesoGalv: 7.85   },
  { diamNom: "3/4\"",   diamExt: "26,90", x: "X", espParede: "2,65", pesoPreto: 9.79,  pesoGalv: 10.12  },
  { diamNom: "1\"",     diamExt: "33,70", x: "X", espParede: "3,35", pesoPreto: 15.05, pesoGalv: 15.51  },
  { diamNom: "1.1/4\"", diamExt: "42,40", x: "X", espParede: "3,35", pesoPreto: 19.63, pesoGalv: 20.49  },
  { diamNom: "1.1/2\"", diamExt: "48,30", x: "X", espParede: "3,35", pesoPreto: 22.56, pesoGalv: 23.54  },
  { diamNom: "2\"",     diamExt: "60,30", x: "X", espParede: "3,75", pesoPreto: 32.06, pesoGalv: 33.02  },
  { diamNom: "2.1/2\"", diamExt: "76,10", x: "X", espParede: "3,75", pesoPreto: 40.57, pesoGalv: 42.20  },
  { diamNom: "3\"",     diamExt: "88,90", x: "X", espParede: "4,00", pesoPreto: 50.25, pesoGalv: 51.54  },
  { diamNom: "4\"",     diamExt: "114,30",x: "X", espParede: "4,50", pesoPreto: 73.12, pesoGalv: 74.77  },
  { diamNom: "5\"",     diamExt: "139,70",x: "X", espParede: "4,75", pesoPreto: 97.20, pesoGalv: 103.98 },
  { diamNom: "6\"",     diamExt: "165,10",x: "X", espParede: "4,75", pesoPreto: 116.93,pesoGalv: 119.53 },
];


// TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH

const cols_sch = ["DIÂM. NOM. (POL.)", "DIÂM. EXT. (M.M.)", "ESP. DA PAREDE (M.M.)", "CLASSE SCH", "PESO NOM. (KG/M.)"];

const rows_tbl_1 = [
  { diamNom: "1/4\"",    diamExt: "13,2",  espParede: "3,02",  classeSch: "80",  pesoNom: "0,80" },
  { diamNom: "1/4\"",    diamExt: "13,2",  espParede: "2,31",  classeSch: "*40", pesoNom: "0,85" },
  { diamNom: "3/8”",     diamExt: "17,2",  espParede: "3,20",  classeSch: "80",  pesoNom: "1,10" },
  { diamNom: "3/8”",     diamExt: "17,2",  espParede: "2,77",  classeSch: "*40", pesoNom: "1,27" },
  { diamNom: "1/2”",     diamExt: "21,3",  espParede: "3,73",  classeSch: "80",  pesoNom: "1,62" },
  { diamNom: "1/2”",     diamExt: "21,3",  espParede: "4,78",  classeSch: "160", pesoNom: "1,95" },
  { diamNom: "1/2”",     diamExt: "21,3",  espParede: "7,47",  classeSch: "XXS", pesoNom: "2,54" },
  { diamNom: "1/2”",     diamExt: "21,3",  espParede: "2,87",  classeSch: "*40", pesoNom: "1,68" },
  { diamNom: "1/2”",     diamExt: "21,3",  espParede: "3,91",  classeSch: "80",  pesoNom: "2,19" },
  { diamNom: "3/4\" (wa”)", diamExt: "26,7", espParede: "5,56", classeSch: "160", pesoNom: "2,89" },
  { diamNom: "3/4\" (wa”)", diamExt: "26,7", espParede: "7,82", classeSch: "XXS", pesoNom: "3,64" },
  { diamNom: "3/4\" (wa”)", diamExt: "26,7", espParede: "3,38", classeSch: "*40", pesoNom: "2,50" },
  { diamNom: "1\"",      diamExt: "33,4",  espParede: "4,55",  classeSch: "80",  pesoNom: "3,23" },
  { diamNom: "1\"",      diamExt: "33,4",  espParede: "6,36",  classeSch: "160", pesoNom: "4,23" },
  { diamNom: "1\"",      diamExt: "33,4",  espParede: "9,09",  classeSch: "XXS", pesoNom: "5,45" },
  { diamNom: "1\"",      diamExt: "33,4",  espParede: "3,56",  classeSch: "*40", pesoNom: "3,38" },
  { diamNom: "1.1/4\"",  diamExt: "42,2",  espParede: "4,85",  classeSch: "80",  pesoNom: "4,47" },
  { diamNom: "1.1/4\"",  diamExt: "42,2",  espParede: "6,35",  classeSch: "160", pesoNom: "5,60" },
  { diamNom: "1.1/4\"",  diamExt: "42,2",  espParede: "9,70",  classeSch: "XXS", pesoNom: "7,76" },
  { diamNom: "1.1/4\"",  diamExt: "42,2",  espParede: "3,68",  classeSch: "*40", pesoNom: "4,05" },
  { diamNom: "1.1/2\"",  diamExt: "48,3",  espParede: "5,08",  classeSch: "80",  pesoNom: "5,40" },
  { diamNom: "1.1/2\"",  diamExt: "48,3",  espParede: "7,14",  classeSch: "160", pesoNom: "7,24" },
  { diamNom: "1.1/2\"",  diamExt: "48,3",  espParede: "10,16", classeSch: "XXS", pesoNom: "9,55" },
  { diamNom: "1.1/2\"",  diamExt: "48,3",  espParede: "3,91",  classeSch: "*40", pesoNom: "5,43" },
  { diamNom: "2\"",      diamExt: "60,3",  espParede: "5,54",  classeSch: "80",  pesoNom: "7,47" },
  { diamNom: "2\"",      diamExt: "60,3",  espParede: "8,74",  classeSch: "160", pesoNom: "11,11" },
  { diamNom: "2\"",      diamExt: "60,3",  espParede: "11,07", classeSch: "XXS", pesoNom: "13,45" },
  { diamNom: "2\"",      diamExt: "60,3",  espParede: "5,16",  classeSch: "*40", pesoNom: "8,63" },
  { diamNom: "2.1/2\"",  diamExt: "73,0",  espParede: "7,01",  classeSch: "80",  pesoNom: "11,41" },
  { diamNom: "2.1/2\"",  diamExt: "73,0",  espParede: "9,52",  classeSch: "160", pesoNom: "14,91" },
  { diamNom: "2.1/2\"",  diamExt: "73,0",  espParede: "14,02", classeSch: "XXS", pesoNom: "20,41" },
  { diamNom: "3\"",      diamExt: "88,9",  espParede: "5,49",  classeSch: "*40", pesoNom: "11,29" },
  { diamNom: "3\"",      diamExt: "88,9",  espParede: "7,62",  classeSch: "80",  pesoNom: "15,27" },
  { diamNom: "3\"",      diamExt: "88,9",  espParede: "11,13", classeSch: "160", pesoNom: "21,34" },
  { diamNom: "3\"",      diamExt: "88,9",  espParede: "15,24", classeSch: "XXS", pesoNom: "27,68" },
  { diamNom: "3.1/2\"",  diamExt: "101,6", espParede: "5,74",  classeSch: "*40", pesoNom: "13,57" },
  { diamNom: "3.1/2\"",  diamExt: "101,6", espParede: "8,08",  classeSch: "80",  pesoNom: "18,64" },
  { diamNom: "3.1/2\"",  diamExt: "101,6", espParede: "6,02",  classeSch: "*40", pesoNom: "16,08" },
  { diamNom: "3.1/2\"",  diamExt: "101,6", espParede: "8,56",  classeSch: "80",  pesoNom: "22,32" },
  { diamNom: "4\"",      diamExt: "114,3", espParede: "11,13", classeSch: "120", pesoNom: "28,31" },
  { diamNom: "4\"",      diamExt: "114,3", espParede: "13,49", classeSch: "160", pesoNom: "33,54" },
  { diamNom: "4\"",      diamExt: "114,3", espParede: "17,12", classeSch: "XXS", pesoNom: "41,03" },
  { diamNom: "4\"",      diamExt: "114,3", espParede: "6,55",  classeSch: "*40", pesoNom: "21,78" },
  { diamNom: "4\"",      diamExt: "114,3", espParede: "9,53",  classeSch: "80",  pesoNom: "30,96" },
  { diamNom: "5\"",      diamExt: "141,3", espParede: "12,76", classeSch: "120", pesoNom: "40,29" },
  { diamNom: "5\"",      diamExt: "141,3", espParede: "15,88", classeSch: "160", pesoNom: "49,11" },
  { diamNom: "5\"",      diamExt: "141,3", espParede: "19,05", classeSch: "XXS", pesoNom: "57,44" }
];

const rows_tbl_2 = [
  // 6"
  { diamNom: "6\"",  diamExt: "168,3", espParede: "7,11",  classeSch: "40",  pesoNom: "28,27" },
  { diamNom: "6\"",  diamExt: "168,3", espParede: "10,97", classeSch: "80",  pesoNom: "42,57" },
  { diamNom: "6\"",  diamExt: "168,3", espParede: "14,27", classeSch: "120", pesoNom: "54,22" },
  { diamNom: "6\"",  diamExt: "168,3", espParede: "18,26", classeSch: "160", pesoNom: "67,57" },
  { diamNom: "6\"",  diamExt: "168,3", espParede: "21,95", classeSch: "XXS", pesoNom: "79,20" },

  // 8"
  { diamNom: "8\"",  diamExt: "219,1", espParede: "6,35",  classeSch: "20",  pesoNom: "33,32" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "7,04",  classeSch: "30",  pesoNom: "36,80" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "8,18",  classeSch: "*40", pesoNom: "42,54" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "10,31", classeSch: "60",  pesoNom: "53,10" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "12,70", classeSch: "80",  pesoNom: "64,65" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "15,09", classeSch: "100", pesoNom: "75,92" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "18,26", classeSch: "120", pesoNom: "90,46" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "20,62", classeSch: "140", pesoNom: "100,96" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "22,22", classeSch: "XXS", pesoNom: "107,76" },
  { diamNom: "8\"",  diamExt: "219,1", espParede: "23,01", classeSch: "160", pesoNom: "111,29" },

  // 10"
  { diamNom: "10\"", diamExt: "273,0", espParede: "6,35",  classeSch: "20",  pesoNom: "41,78" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "7,80",  classeSch: "30",  pesoNom: "51,02" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "9,27",  classeSch: "*40", pesoNom: "60,32" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "12,70", classeSch: "60",  pesoNom: "81,56" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "15,09", classeSch: "80",  pesoNom: "96,00" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "18,26", classeSch: "100", pesoNom: "114,77" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "21,44", classeSch: "120", pesoNom: "133,04" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "25,40", classeSch: "140", pesoNom: "155,15" },
  { diamNom: "10\"", diamExt: "273,0", espParede: "28,58", classeSch: "160", pesoNom: "172,32" },

  // 12"
  { diamNom: "12\"", diamExt: "323,8", espParede: "6,35",  classeSch: "20",  pesoNom: "49,74" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "8,38",  classeSch: "30",  pesoNom: "65,22" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "9,53",  classeSch: "STD", pesoNom: "73,84" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "10,31", classeSch: "40",  pesoNom: "79,74" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "12,70", classeSch: "XS",  pesoNom: "97,48" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "14,27", classeSch: "60",  pesoNom: "108,99" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "17,48", classeSch: "80",  pesoNom: "131,06" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "21,44", classeSch: "100", pesoNom: "156,91" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "25,40", classeSch: "120", pesoNom: "186,98" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "28,58", classeSch: "140", pesoNom: "208,12" },
  { diamNom: "12\"", diamExt: "323,8", espParede: "33,32", classeSch: "160", pesoNom: "238,80" },

  // 14"
  { diamNom: "14\"", diamExt: "355,6", espParede: "6,35",  classeSch: "10",  pesoNom: "54,70" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "7,92",  classeSch: "20",  pesoNom: "67,96" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "9,53",  classeSch: "*30", pesoNom: "81,31" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "11,13", classeSch: "40",  pesoNom: "94,53" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "12,70", classeSch: "XS",  pesoNom: "107,41" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "15,09", classeSch: "60",  pesoNom: "126,72" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "19,05", classeSch: "80",  pesoNom: "158,13" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "23,83", classeSch: "100", pesoNom: "194,97" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "27,79", classeSch: "120", pesoNom: "224,68" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "31,75", classeSch: "140", pesoNom: "253,63" },
  { diamNom: "14\"", diamExt: "355,6", espParede: "35,71", classeSch: "160", pesoNom: "281,77" }
];

const rows_tbl_3 = [
  // 16"
  { diamNom: "16\"", diamExt: "406,4", espParede: "6,35",  classeSch: "10",  pesoNom: "62,65" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "7,92",  classeSch: "20",  pesoNom: "77,88" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "9,53",  classeSch: "*30", pesoNom: "93,24" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "12,70", classeSch: "40",  pesoNom: "123,33" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "16,66", classeSch: "60",  pesoNom: "160,18" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "21,44", classeSch: "80",  pesoNom: "203,56" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "26,19", classeSch: "100", pesoNom: "245,58" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "30,96", classeSch: "120", pesoNom: "286,72" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "36,53", classeSch: "140", pesoNom: "333,22" },
  { diamNom: "16\"", diamExt: "406,4", espParede: "40,49", classeSch: "160", pesoNom: "365,42" },

  // 18"
  { diamNom: "18\"", diamExt: "457,2", espParede: "6,35",  classeSch: "10",  pesoNom: "70,21" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "7,92",  classeSch: "20",  pesoNom: "87,82" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "9,53",  classeSch: "STD", pesoNom: "105,18" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "11,13", classeSch: "30",  pesoNom: "122,40" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "12,70", classeSch: "XS",  pesoNom: "139,24" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "14,27", classeSch: "40",  pesoNom: "155,96" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "19,05", classeSch: "60",  pesoNom: "205,87" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "23,83", classeSch: "80",  pesoNom: "254,67" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "29,36", classeSch: "100", pesoNom: "309,86" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "34,93", classeSch: "120", pesoNom: "363,77" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "39,67", classeSch: "140", pesoNom: "408,58" },
  { diamNom: "18\"", diamExt: "457,2", espParede: "45,24", classeSch: "160", pesoNom: "459,67" },

  // 20"
  { diamNom: "20\"", diamExt: "508,0", espParede: "6,35",  classeSch: "10",  pesoNom: "78,57" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "9,53",  classeSch: "*20", pesoNom: "117,11" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "12,70", classeSch: "30",  pesoNom: "155,15" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "15,09", classeSch: "40",  pesoNom: "183,43" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "20,62", classeSch: "60",  pesoNom: "247,94" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "26,19", classeSch: "80",  pesoNom: "311,22" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "32,54", classeSch: "100", pesoNom: "381,59" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "38,10", classeSch: "120", pesoNom: "441,59" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "44,45", classeSch: "140", pesoNom: "508,24" },
  { diamNom: "20\"", diamExt: "508,0", espParede: "50,01", classeSch: "160", pesoNom: "564,96" },

  // 24"
  { diamNom: "24\"", diamExt: "609,6", espParede: "17,48", classeSch: "40",  pesoNom: "255,22" },
  { diamNom: "24\"", diamExt: "609,6", espParede: "24,61", classeSch: "60",  pesoNom: "355,89" },
  { diamNom: "24\"", diamExt: "609,6", espParede: "30,96", classeSch: "80",  pesoNom: "441,90" },
  { diamNom: "24\"", diamExt: "609,6", espParede: "38,89", classeSch: "100", pesoNom: "547,41" },
  { diamNom: "24\"", diamExt: "609,6", espParede: "46,02", classeSch: "120", pesoNom: "639,79" },
  { diamNom: "24\"", diamExt: "609,6", espParede: "52,37", classeSch: "140", pesoNom: "719,85" },
  { diamNom: "24\"", diamExt: "609,6", espParede: "59,54", classeSch: "160", pesoNom: "807,79" }
];

// Sections 

const sections = ['TUBOS A/C NBR 5580-L', 'TUBOS A/C NBR 5580-M', 'TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH']

export default function tubosCarbono() {


  return (
    <div>
      <Navbar/>
      <div className="relative w-full h-100 overflow-hidden  ">
        {/* Imagem de fundo com filtro de brightness */}
        <div className="absolute inset-0 bg-[url(/hidrotube.png)] bg-cover bg-center brightness-55 z-0"></div>



        <div className="relative z-10">


          <p className={ `text-center text-5xl pt-50 uppercase text-white font-bold ${venus.className}` }>Tubos de carbono</p>
        </div>
      </div>

      <div className="
        flex
        my-25
        ">
        <div className="
          w-1/2
          flex
          justify-center
          ">
          <Image width={600} height={600} src="/hidrotube.png" alt="tubo aco carbono"/>


        </div>

        <div className=" 
          w-1/2
          text-center px-40 ">

          <h1 className={`${venus.className} text-3xl mb-8 text-[#142667]`}>
            FABRICAÇÃO E 
            NORMAS TÉCNICAS
          </h1>

          <p className="text-xl">
            Os tubos de aço carbono são amplamente utilizados em sistemas industriais, comerciais e de construção civil devido à sua resistência mecânica, durabilidade e versatilidade.

            Podem ser fabricados com costura (soldados) ou sem costura (laminados a quente ou estirados a frio), dependendo da aplicação e das exigências normativas.
            A fabricação envolve processos como laminação, soldagem e galvanização, garantindo diferentes acabamentos e características de resistência à pressão, corrosão e temperatura. 

            Esses tubos atendem às principais normas técnicas nacionais e internacionais, como NBR 5580, NBR 5590 e ASTM A-106,
            assegurando padronização dimensional, confiabilidade e qualidade no desempenho.
          </p>

        </div>


      </div>


      <div className="py-15  flex justify-center">
        <div className="w-1/2 flex flex-col justify-center items-center px-30">
          <h1 className={`${venus.className} text-center text-3xl text-[#142667]`}>SELECIONE A NORMA DESEJADA</h1>
          <div className="bg-red-500 h-[2%] mt-2 w-2/3"></div>

        </div>

        <div className="w-1/2  flex flex-col items-center ">
          {sections.map((sec) => (
            <a
              key={sec}
              href={`#${sec}`}
              className="
                  hover:translate-x-5 
                  duration-200
                  ease-in-out
                  text-2xl font-bold capitalize bg-[#142667] my-3 w-3/4 text-[#FFFFFF] p-2 rounded-"

            >
              {sec}
            </a>
          ))}

        </div>
      </div>

      <section id="TUBOS A/C NBR 5580-L">

        <div className="py-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS A/C NBR 5580-L</h1>
          </div>

          <div className="flex py-10">
            <div className="flex flex-col w-1/2 px-20">

              <p className="text-xl ">
                Tubos leves com costura, indicados para condução de fluidos de baixa pressão. <br/> <br/>



                Fornecidos com acabamento <span className="font-black">Preto ou Galvanizado</span> com <span className="font-black">comprimento de 6000 mm.</span> A galvanização oferece maior resistência contra corrosão.<br/><br/>

                São utilizados em instalações prediais e industriais leves, para o transporte de ar comprimido, gases, água, vapor,
                e outros fluídos não corrosivos, em condições normais de trabalho.
              </p>

              <div className="h-100 overflow-hidden">

                <Image className="my-10"  width={700} height={500} src="/tubo_ac_quatro.png" alt="imagem tubo de aço carbono"/>
              </div>
            </div>

            <div className="w-1/2 pt-15 pr-20">
              <TabelaTubosCarbono dataRows={rows_nbr_l} title="NBR L" cols={cols_nbr_l} className=""/>

            </div>

          </div>

        </div>


      </section>


      <section id="TUBOS A/C NBR 5580-M">

        <div className="py-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS A/C NBR 5580-M</h1>
          </div>

          <div className="flex py-10">
            <div className="flex flex-col w-1/2 px-20">

              <p className="text-xl ">
                Tubos médios <span className="font-black">com costura</span> , projetados para suportar maiores pressões que a classe leve, mantendo versatilidade e custo competitivo.<br/><br/>
                  Fornecidos com acabamento <span className="font-black">Preto ou Galvanizado </span>
                   com <span className="font-black">comprimento de 6000 mm</span>. A galvanização oferece
                  maior resistência contra corrosão.<br/><br/>
                  São utilizados em sistemas de pressão moderada, para o
                  transporte de ar comprimido, gases, água, vapor, e
                  outros fluídos não corrosivos, em condições normais de
                  trabalho.
              </p>

              <div className="h-100 overflow-hidden">

                <Image className="my-10"  width={700} height={500} src="/tubo_ac_quatro.png" alt="imagem tubo de aço carbono"/>
              </div>
            </div>

            <div className="w-1/2 pt-15 pr-20">
              <TabelaTubosCarbono dataRows={rows_nbr_m} title="NBR M" cols={cols_nbr_l} className=""/>

            </div>

          </div>

        </div>

      </section>

      <section id="TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH">
        <div className="py-15">

          <div className="w-full bg-[#142667] py-10 my-15">
            <h1 className={`${venus.className} text-3xl px-20 text-[#FFFFFF]`}>TUBOS A/C SCH A-106 E TUBOS A/C NBR 5590/SCH</h1>
          </div>
          <div className="flex flex-col w-full">

            <div className="flex my-15">
              <div className=" border-r-2 w-1/2 pl-20 pr-10">

                <h1 className="text-3xl font-black mb-5">SCH A-106</h1>
                <p className="text-xl">Tubos sem costura fabricados de acordo com a norma ASTM
                  A-106, garantindo alta performance em ambientes críticos.<br/><br/>

                  Fornecidos com acabamento Preto com comprimento de
                  6000 mm.<br/><br/>

                  São utilizados principalmente em indústrias petroquímicas,
                  refinarias, caldeiras, trocadores de calor e linhas de vapor de
                  alta pressão. Suportam altas pressões e temperaturas sem
                  comprometer a segurança.</p>
              </div>

              <div className="w-1/2 pl-10 pr-20">

                <h1 className="text-3xl mb-5">NBR 5590 SCH</h1>
                <p className="text-xl">Tubos de maior resistência, fabricados conforme a norma NBR
                  5590, disponíveis em diferentes schedules (SCH), podendo ser
                  com ou sem costura.<br/><br/>

                  Fornecidos com acabamento Preto com comprimento de 6000
                  mm.<br/><br/>

                  São utilizados para o transporte de vapor, óleo, gás, ar
                  comprimido e condução de fluidos industriais. Ideal para
                  condições de trabalho mais exigentes.</p>
              </div>

            </div>

            <div className="flex w-full justify-center">
              <div className="relative w-11/12 h-[400px] overflow-hidden flex justify-center">
                <Image
                  src="/tubo_ac_5.jpg"
                  alt="Imagem tubos ac 5"
                  fill       // faz a imagem ocupar todo o container
                  className="object-cover object-center" // cropa mantendo proporção
                />
              </div>

            </div>

            <div className="w-full flex justify-center">
              <div className=" flex px-20 my-15 gap-10">

                <div className="w-1/3">

                  <TabelaTubos cols={cols_sch} title="A/C SCH A-106 E A/C NBR 5590/SCH" dataRows={rows_tbl_1}/>
                </div>

                <div className="w-1/3">

                  <TabelaTubos cols={cols_sch} title="A/C SCH A-106 E A/C NBR 5590/SCH" dataRows={rows_tbl_2}/>
                </div>

                <div className="w-1/3">

                  <TabelaTubos cols={cols_sch} title="A/C SCH A-106 E A/C NBR 5590/SCH" dataRows={rows_tbl_3}/>
                </div>


              </div>

            </div>



          </div>
        </div>



      </section>
    </div>
  )

}
