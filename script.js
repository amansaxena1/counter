let leetcode = 434;
let codechef = 0;
let codeforces = 0;
let gfg = 0;
let hackerrank = 0;
let codestudio = 0;
document.getElementById("info").style.display = "none";



async function dataload() {
  await fetch("https://codecoffee-eight.vercel.app/counter/aman_saxena_01/amansaxena1/amansaxena01/amansaxena1/amansaxena1/amansaxena1/7f701168-4427-434e-9f2c-98c4bf09cb3b")
    .then((res) => res.json())
    .then((data) => {
      codechef = data.ccquestion;
      hackerrank = data.hrquestion;
      codeforces = data.cfquestion;
      codestudio = data.csquestion;
      leetcode = data.lcquestion;
      gfg = data.gfgquestion;
      document.getElementById("info").style.display = "block";
      document.getElementById("anim").style.display = "none";
    });
  console.log("data loaded", codechef, leetcode, codeforces, gfg, hackerrank);
  document.getElementById("codechef").innerHTML = codechef;
  document.getElementById("leetcode").innerHTML = leetcode;
  document.getElementById("codeforces").innerHTML = codeforces;
  document.getElementById("gfg").innerHTML = gfg;
  document.getElementById("hackerrank").innerHTML = hackerrank;
  document.getElementById("codestudio").innerHTML = codestudio;
  document.getElementById("total").innerHTML =
    codechef + leetcode + codeforces + gfg + hackerrank + codestudio;
}

dataload();
