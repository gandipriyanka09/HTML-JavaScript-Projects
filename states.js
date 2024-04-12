function populateDistricts() {
    var stateSelect = document.getElementById("states");
    var districtSelect = document.getElementById("districts");
    var state = stateSelect.options[stateSelect.selectedIndex].value;
    districtSelect.innerHTML = ""; // Clear previous options

    // Define districts based on selected state
    var districts = [];
    switch(state) {
      case "Andhra Pradesh":
        districts = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Krishna", "Kurnool", "Nellore", "Prakasam", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari", "YSR Kadapa"];
        break;
      case "Assam":
        districts = ["Baksa", "Barpeta", "Bongaigaon", "Cachar", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Dima Hasao", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Sivasagar", "Sonitpur", "South Salmara-Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"];
        break;
      case "Bihar":
        districts = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
        break;
      // Add cases for more states here
    }

    // Populate the districts select element
    for (var i = 0; i < districts.length; i++) {
      var option = document.createElement("option");
      option.text = districts[i];
      option.value = districts[i];
      districtSelect.add(option);
    }
  }