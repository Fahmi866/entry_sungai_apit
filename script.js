function showDetail(name) {
  const text = {
    asril: "Asril adalah seorang hacker asal rintis, pribadi yang disiplin dan bertanggung jawab.",
    aman: "Aman dikenal sebagai sosok yang tenang dan suka membantu, hobby main voly.",
    adit: "Adit adalah seseorang yang menjalani dua profesi yaitu mekanik honda king dan barbershop, fans dodo.",
    fahmi: "Fahmi adalah pribadi yang kreatif dan penuh semangat, fans messi.",
    genta: "genta adalah pribadi yang kreatif dan hobby dibidang pramuka.",
    helky: "Helky dikenal sebagai sosok yang tegas dan pekerja keras, hobby main voly.",
    ridho: "Ridho adalah pribadi yang sabar dan bijaksana, striker asal belanda.",
    ravi: "Ravi memiliki sifat percaya diri dan selalu optimis.",
    zulfan: "Zulfan adalah seorang yang suka dalam debat politik dan suka anis.",
  };

  document.getElementById("detailText").innerText = text[name];
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
