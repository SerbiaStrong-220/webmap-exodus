// (c) ДОЛБОЁБ КОДИНГ ИНКОРПОРЕЙТЕД

import './style.css';
import {Map, View} from 'ol';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import {defaults as defaultInteractions} from 'ol/interaction';

const mapLayer = new TileLayer();
const maps = {
  ADS_Zenith_CK_395: {image: "ADS_Zenith_CK_395.webp", name: "ADS Zenith CK-395"},
  AES_McChicken: {image: "AES_McChicken.webp", name: "AES McChicken"},
  AES_McChilly: {image: "AES_McChilly.webp", name: "AES McChilly"},
  BSB_Hourglass: {image: "BSB_Hourglass.webp", name: "BSB Hourglass"},
  BT_Y_Atom: {image: "BT_Y_Atom.webp", name: "BT-Y Atom"},
  BT_Y_Hazel: {image: "BT_Y_Hazel.webp", name: "BT-Y Hazel"},
  CDM_Comet: {image: "CDM_Comet.webp", name: "CDM Comet"},
  COG_Arkansaw: {image: "COG_Arkansaw.webp", name: "COG Arkansaw"},
  DFNT_Promise: {image: "DFNT_Promise.webp", name: "DFNT Promise"},
  DIS_Brute: {image: "DIS_Brute.webp", name: "DIS Brute"},
  DIS_Femur: {image: "DIS_Femur.webp", name: "DIS Femur"},
  DIS_Notch: {image: "DIS_Notch.webp", name: "DIS Notch"},
  DIS_Olympus: {image: "DIS_Olympus.webp", name: "DIS Olympus"},
  DIS_Pluto_MKII: {image: "DIS_Pluto_MKII.webp", name: "DIS Pluto MKII"},
  DIS_Rig: {image: "DIS_Rig.webp", name: "DIS Rig"},
  DIS_Vaquita: {image: "DIS_Vaquita.webp", name: "DIS Vaquita"},
  DME_Shareholder: {image: "DME_Shareholder.webp", name: "DME Shareholder"},
  DWI_Kuldi: {image: "DWI_Kuldi.webp", name: "DWI Kuldi"},
  ELH_Carrion: {image: "ELH_Carrion.webp", name: "ELH Carrion"},
  HES_Arribane: {image: "HES_Arribane.webp", name: "HES Arribane"},
  HES_Canister: {image: "HES_Canister.webp", name: "HES Canister"},
  HES_Phaeron: {image: "HES_Phaeron.webp", name: "HES Phaeron"},
  HES_Windreign: {image: "HES_Windreign.webp", name: "HES Windreign"},
  HME_Artemis: {image: "HME_Artemis.webp", name: "HME Artemis"},
  HT_Sagittarius: {image: "HT_Sagittarius.webp", name: "HT Sagittarius"},
  IB_Phantom: {image: "IB_Phantom.webp", name: "IB Phantom"},
  IDY_Europa: {image: "IDY_Europa.webp", name: "IDY Europa"},
  IHR_Victoria: {image: "IHR_Victoria.webp", name: "IHR Victoria"},
  JIN_Zeros: {image: "JIN_Zeros.webp", name: "JIN Zeros"},
  LPS_Ledokol: {image: "LPS_Ledokol.webp", name: "LPS Ledokol"},
  MI_COR_Caracara: {image: "MI_COR_Caracara.webp", name: "MI-COR Caracara"},
  MI_COR_Kunai: {image: "MI_COR_Kunai.webp", name: "MI-COR Kunai"},
  MI_COR_Odenta: {image: "MI_COR_Odenta.webp", name: "MI-COR Odenta"},
  MI_COR_Tanuki: {image: "MI_COR_Tanuki.webp", name: "MI-COR Tanuki"},
  MI_Siebel: {image: "MI_Siebel.webp", name: "MI Siebel"},
  MI_Triage: {image: "MI_Triage.webp", name: "MI Triage"},
  NCS_Drakon: {image: "NCS_Drakon.webp", name: "NCS Drakon"},
  NCS_Natisk: {image: "NCS_Natisk.webp", name: "NCS Natisk"},
  NCS_Strayk: {image: "NCS_Strayk.webp", name: "NCS Strayk"},
  NCS_Sulak: {image: "NCS_Sulak.webp", name: "NCS Sulak"},
  NCS_Tayfun: {image: "NCS_Tayfun.webp", name: "NCS Tayfun"},
  NEI_Dervi: {image: "NEI_Dervi.webp", name: "NEI Dervi"},
  NSK_Tiger: {image: "NSK_Tiger.webp", name: "NSK Tiger"},
  NS_Ethereal: {image: "NS_Ethereal.webp", name: "NS Ethereal"},
  PBB_Flashpoint: {image: "PBB_Flashpoint.webp", name: "PBB Flashpoint"},
  PB_Bratan: {image: "PB_Bratan.webp", name: "PB Bratan"},
  PB_Padval: {image: "PB_Padval.webp", name: "PB Padval"},
  PB_Piva: {image: "PB_Piva.webp", name: "PB Piva"},
  PDV_IED_Motley_Anne: {image: "PDV_IED_Motley_Anne.webp", name: "PDV IED Motley Anne"},
  PDV_Scorpion: {image: "PDV_Scorpion.webp", name: "PDV Scorpion"},
  PDV_Spyglass_MKII: {image: "PDV_Spyglass_MKII.webp", name: "PDV Spyglass MKII"},
  PDV_Tethys: {image: "PDV_Tethys.webp", name: "PDV Tethys"},
  PDW_Ferz: {image: "PDW_Ferz.webp", name: "PDW Ferz"},
  PDW_HSS_Saturn: {image: "PDW_HSS_Saturn.webp", name: "PDW HSS Saturn"},
  PDW_Neptune: {image: "PDW_Neptune.webp", name: "PDW Neptune"},
  PDW_Saintie: {image: "PDW_Saintie.webp", name: "PDW Saintie"},
  PDW_Valkyrie: {image: "PDW_Valkyrie.webp", name: "PDW Valkyrie"},
  PPU_Akula: {image: "PPU_Akula.webp", name: "PPU Akula"},
  PPU_Gruznyk: {image: "PPU_Gruznyk.webp", name: "PPU Gruznyk"},
  PPU_Remontnik: {image: "PPU_Remontnik.webp", name: "PPU Remontnik"},
  PPU_Sekunds: {image: "PPU_Sekunds.webp", name: "PPU Sekunds"},
  PTI_Spessbite: {image: "PTI_Spessbite.webp", name: "PTI Spessbite"},
  PTR_Leaf: {image: "PTR_Leaf.webp", name: "PTR Leaf"},
  SE_Jitterbug: {image: "SE_Jitterbug.webp", name: "SE Jitterbug"},
  SHM_Judiciary: {image: "SHM_Judiciary.webp", name: "SHM Judiciary"},
  SHM_Magus: {image: "SHM_Magus.webp", name: "SHM Magus"},
  SHS_DIS_Borer: {image: "SHS_DIS_Borer.webp", name: "SHS DIS Borer"},
  SKR_Kestrel: {image: "SKR_Kestrel.webp", name: "SKR Kestrel"},
  SKR_Littora: {image: "SKR_Littora.webp", name: "SKR Littora"},
  SKR_Noble: {image: "SKR_Noble.webp", name: "SKR Noble"},
  SKR_Peregrine: {image: "SKR_Peregrine.webp", name: "SKR Peregrine"},
  SKR_Picses: {image: "SKR_Picses.webp", name: "SKR Picses"},
  SKR_Sakuratsu: {image: "SKR_Sakuratsu.webp", name: "SKR Sakuratsu"},
  SKR_Sirius: {image: "SKR_Sirius.webp", name: "SKR Sirius"},
  SRA_Duran: {image: "SRA_Duran.webp", name: "SRA Duran"},
  TPC_Pillbox: {image: "TPC_Pillbox.webp", name: "TPC Pillbox"},
  TSF_CRSW_Andromeda: {image: "TSF_CRSW_Andromeda.webp", name: "TSF-CRSW Andromeda"},
  TSF_ENG_Welder: {image: "TSF_ENG_Welder.webp", name: "TSF-ENG Welder"},
  TSF_PIN_Hoplite: {image: "TSF_PIN_Hoplite.webp", name: "TSF-PIN Hoplite"},
  TSF_PIN_Shiv: {image: "TSF_PIN_Shiv.webp", name: "TSF-PIN Shiv"},
  TSF_SKR_Archer: {image: "TSF_SKR_Archer.webp", name: "TSF-SKR Archer"},
  TSF_SKR_Argent: {image: "TSF_SKR_Argent.webp", name: "TSF-SKR Argent"},
  TSF_SKR_Autumn: {image: "TSF_SKR_Autumn.webp", name: "TSF-SKR Autumn"},
  TSF_SKR_Dagger: {image: "TSF_SKR_Dagger.webp", name: "TSF-SKR Dagger"},
  TSF_SKR_Flyssa_K: {image: "TSF_SKR_Flyssa_K.webp", name: "TSF-SKR Flyssa-K"},
  TSF_SKR_Iapetus: {image: "TSF_SKR_Iapetus.webp", name: "TSF-SKR Iapetus"},
  TSF_SKR_Ladya: {image: "TSF_SKR_Ladya.webp", name: "TSF-SKR Ladya"},
  TSF_SKR_M_Class_Salvage_Carrier: {image: "TSF_SKR_M_Class_Salvage_Carrier.webp", name: "TSF-SKR M-Class Salvage Carrier"},
  TSF_SKR_Ocelot: {image: "TSF_SKR_Ocelot.webp", name: "TSF-SKR Ocelot"},
  TSF_SKR_Praetorian: {image: "TSF_SKR_Praetorian.webp", name: "TSF-SKR Praetorian"},
  TSF_SKR_Sentinel: {image: "TSF_SKR_Sentinel.webp", name: "TSF-SKR Sentinel"},
  TSF_SKR_Syringe: {image: "TSF_SKR_Syringe.webp", name: "TSF-SKR Syringe"},
  TSF_SKR_Tumour: {image: "TSF_SKR_Tumour.webp", name: "TSF-SKR Tumour"},
  TSF_SVE_Tarantula: {image: "TSF_SVE_Tarantula.webp", name: "TSF-SVE Tarantula"},
  UI_SKR_Hammerhead: {image: "UI_SKR_Hammerhead.webp", name: "UI SKR Hammerhead"},
  UI_Spyglass: {image: "UI_Spyglass.webp", name: "UI Spyglass"},
  UI_Vulture: {image: "UI_Vulture.webp", name: "UI Vulture"},
  UNJ_Framework: {image: "UNJ_Framework.webp", name: "UNJ Framework"},
  UNSA_Fortunate: {image: "UNSA_Fortunate.webp", name: "UNSA Fortunate"},
  UW_Medicus: {image: "UW_Medicus.webp", name: "UW Medicus"},
  UW_Sellsword: {image: "UW_Sellsword.webp", name: "UW Sellsword"},
  UW_Stubby: {image: "UW_Stubby.webp", name: "UW Stubby"},
  UW_Svinya: {image: "UW_Svinya.webp", name: "UW Svinya"},
  UW_Takeaway: {image: "UW_Takeaway.webp", name: "UW Takeaway"},
  VEF_Buran: {image: "VEF_Buran.webp", name: "VEF Buran"},
  VIN_Tokarev: {image: "VIN_Tokarev.webp", name: "VIN Tokarev"},
  WA_Intermission: {image: "WA_Intermission.webp", name: "WA Intermission"},
  WLV_Velios: {image: "WLV_Velios.webp", name: "WLV Velios"},
  ZOB_Claymore: {image: "ZOB_Claymore.webp", name: "ZOB Claymore"},
  ZOB_Sabine_MkII: {image: "ZOB_Sabine_MkII.webp", name: "ZOB Sabine MkII"},
  ZOB_Twilight_MkII: {image: "ZOB_Twilight_MkII.webp", name: "ZOB Twilight MkII"},
  Z_22_Baeg: {image: "Z_22_Baeg.webp", name: "Z-22 Baeg"}
}

const map = new Map({
  target: 'map',
  layers: [
    mapLayer
  ],
  interactions: defaultInteractions({
    mouseWheelZoom: true,
    doubleClickZoom: true
  }),
  view: new View({
    center: [0, 0],
    zoom: 1,
    minZoom: 0,
    maxZoom: 7
  })
});

function setmap(mapid)
{
  sBtn_text.innerText = maps[mapid].name;
  mapLayer.setSource(new XYZ({
    url: "./map_data/" + maps[mapid].image,
    maxZoom: 0,
    interpolate: false,
    wrapX: false
  }));

  const params = new URLSearchParams(window.location.search);
  params.set('map', mapid);
  window.history.replaceState({}, '', `?${params.toString()}`);
}

//Spinny thing when map loads
map.on('loadstart', function () {
  map.getTargetElement().classList.add('spinner');
});

map.on('loadend', function () {
  map.getTargetElement().classList.remove('spinner');
});

// PARALLAX
var IsMoving = false;
// const parallax1 = document.getElementById("layer1")
const parallax2 = document.getElementById("layer2")
const parallax3 = document.getElementById("layer3")

function updateParallax() {
  var x = map.getView().getCenter()[0] / 10000;
  var y = map.getView().getCenter()[1] / 10000;

  parallax2.style.backgroundPosition = (-x/3).toString() + "px " + (y/3).toString() + "px"
  parallax3.style.backgroundPosition = (-x/2).toString() + "px " + (y/2).toString() + "px"

  if (IsMoving)
    window.requestAnimationFrame(updateParallax);
}

map.on('movestart', function (event) {
  IsMoving = true
  updateParallax()
})

map.on('moveend', function (event) {
  IsMoving = false
})

// ояебу
const optTmpl = document.getElementById("opt-tmpl")
for (const [key, value] of Object.entries(maps)) {
  var newbutton = optTmpl.cloneNode(true);
  optTmpl.before(newbutton);
  newbutton.querySelector(".option-text").innerText = value.name
  newbutton.dataset.mapid = key
}
optTmpl.remove();

const optionMenu = document.querySelector(".select-menu"),
       selectBtn = optionMenu.querySelector(".select-btn"),
       searchInput = optionMenu.querySelector(".search-input"),
       sBtn_text = optionMenu.querySelector(".sBtn-text"),
         options = optionMenu.querySelectorAll(".option");

selectBtn.addEventListener("click", () => {
  optionMenu.classList.toggle("active");

  if (optionMenu.classList.contains("active")) {
    sBtn_text.style.display = "none";
    searchInput.style.display = "block";
    searchInput.focus();

    options.forEach(option => {
      option.style.display = "flex";
    });
  } else {
    sBtn_text.style.display = "block";
    searchInput.style.display = "none";
    searchInput.value = "";
  }
});

searchInput.addEventListener("input", (e) => {
  const searchTerm = e.target.value.toLowerCase();

  options.forEach(option => {
    const optionText = option.querySelector(".option-text").innerText.toLowerCase();
    if (optionText.includes(searchTerm)) {
      option.style.display = "flex";
    } else {
      option.style.display = "none";
    }
  });
});

options.forEach(option => {
  option.addEventListener("click", () => {
    optionMenu.classList.remove("active");
    sBtn_text.style.display = "block";
    searchInput.style.display = "none";
    searchInput.value = "";
    setmap(option.dataset.mapid)
  })
});

document.addEventListener("click", (e) => {
  if (!optionMenu.contains(e.target)) {
    optionMenu.classList.remove("active");
    sBtn_text.style.display = "block";
    searchInput.style.display = "none";
    searchInput.value = "";
  }
});

const params = new URLSearchParams(window.location.search);
const mapFromUrl = params.get('map');
const errorContainer = document.getElementById('error-container');

if (mapFromUrl && !maps[mapFromUrl]) {
  errorContainer.style.display = "flex";
  document.getElementById('map').style.display = "none";
  document.getElementById('map-select').style.display = "none";
} else if (mapFromUrl && maps[mapFromUrl]) {
  setmap(mapFromUrl);
} else {
  setmap(Object.keys(maps)[0]);
}