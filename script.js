function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
/*Date*/
function myFunction() {
  var x = document.getElementById("myDate").form.id;
  document.getElementById("demo").innerHTML = x;
}
//Email valid//
/* function validateemail() {
  var x = document.myform.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert(
      "Kérlek adj meg,érvényes e-mail címet \n @:" +
        atposition +
        "\n .:" +
        dotposition
    );
    return false;
  }
} */

window.onload = function () {
  email.addEventListener("focusout", function () {
    var x = document.myform.email.value;
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (
      atposition < 1 ||
      dotposition < atposition + 2 ||
      dotposition + 2 >= x.length
    ) {
      alert(
        "Kérlek adj meg,érvényes e-mail címet \n @:" +
          atposition +
          "\n .:" +
          dotposition
      );
      return false;
    }
  });

  var todaysDate = new Date();
  var year = todaysDate.getFullYear(); // YYYY
  var month = ("0" + (todaysDate.getMonth() + 1)).slice(-2); // MM
  var day = ("0" + todaysDate.getDate()).slice(-2); // DD
  var minDate = year + "-" + month + "-" + day;

  myDate.addEventListener("input", function () {
    var date = document.getElementById("myDate").value;
    var n = date.localeCompare(minDate);
    if (n == -1) {
      alert("A mai napnál korábbra nem foglalhat!");
    }
  });

  var hours = todaysDate.getHours() + 1;
  var minutes = todaysDate.getMinutes();
  var minTime = year + "-" + month + "-" + day + "-" + hours + ":" + minutes;

  appt.addEventListener("input", function () {
    var date = document.getElementById("myDate").value;
    var n = date.localeCompare(minDate);
    var time =
      document.getElementById("myDate").value +
      "-" +
      document.getElementById("appt").value;
    var t = time.localeCompare(minTime);
    if (n !== -1) {
      if (t == -1) {
        alert("Csak egy órával későbbre foglalhat, mint az aktuális idő");
      }
    } else {
      alert("Válasszon megfelelő dátumot");
    }
  });

  let reservationBtn = document.getElementById(`reservation`);
  reservationBtn.onclick = function () {
    if (name.value === "") {
      alert("Tölts ki minden mezőt");
    } else if (email.value === "") {
      alert("Tölts ki minden mezőt");
    } else if (seets.value === "") {
      alert("Tölts ki minden mezőt");
    } else if (myDate.value === "") {
      alert("Tölts ki minden mezőt");
    } else if (appt.value === "") {
      alert("Tölts ki minden mezőt");
    } else {
      console.log(
        document.getElementById("name").value,
        document.getElementById("email").value,
        document.getElementById("seets").value,
        document.getElementById("myDate").value,
        document.getElementById("appt").value
      );
      alert(
        "Foglalás részletei: \n" +
          "Az Ön neve: " +
          document.getElementById("name").value +
          "\nÖn email címe: " +
          document.getElementById("email").value +
          "\nVendégek száma: " +
          document.getElementById("seets").value +
          "\nVálasztott dátum: " +
          document.getElementById("myDate").value +
          "\nIdőpont: " +
          document.getElementById("appt").value
      );
    }
  };
};
