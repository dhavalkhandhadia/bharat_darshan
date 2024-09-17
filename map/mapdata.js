var simplemaps_countrymap_mapdata={
  main_settings: {
   //General settings
    width: "500", //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",
    
    //State defaults
    state_description: "State description",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Location description",
    location_url: "",
    location_color: "#FF0067",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#ffffff",
    label_hover_color: "#ffffff",
    label_size:25 ,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",
   
    //Zoom settings
    zoom: "yes",
    manual_zoom: "yes",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    navigation_size:25,
    arrow_color:"blue",
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 0.9,
    popup_shadow: 1,
    popup_corners: 5,
    popup_font: "12px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "no",
    images_directory: "default",
    fade_time: 0.1,
    link_text: "View Website",
    popups: "detect",
    state_image_url: "",
    state_image_position: "",
    location_image_url: ""
  },
  state_specific: {
    INAN: {
      name: "Andaman and Nicobar",
      hover_color: "#61caef"
    },
    INAP: {
      name: "Andhra Pradesh",
      color: "#23cd23",
      hover_color: "#ef787a"
    },
    INAR: {
      name: "Arunachal Pradesh",
      color: "orange",
      hover_color: "#f1484b"
    },
    INAS: {
      name: "Assam",
      color: "orange",
      hover_color: "#b6d44e"
    },
    INBR: {
      name: "Bihar",
      color: "white",
      hover_color: "#8c51a3"
    },
    INCH: {
      name: "Chandigarh",
      hover_color: ""
    },
    INCT: {
      name: "Chhattisgarh",
      color: "white",
      hover_color: "#aadff7"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu"
    },
    INDL: {
      name: "Delhi",
      hover_color: "red",
      color:"orange"
    },
    INGA: {
      name: "Goa",
      color: "#23cd23",
      hover_color: "#f9c65c"
    },
    INGJ: {
      name: "Gujarat",
      color: "white",
      hover_color: "#fee3a0",
      url:"https://en.wikipedia.org/wiki/Gujarat"
    },
    INHP: {
      name: "Himachal Pradesh",
      color: "orange",
      hover_color: "#b5d34d"
    },
    INHR: {
      name: "Haryana",
      color: "orange",
      hover_color: "#4cc2ed"
    },
    INJH: {
      name: "Jharkhand",
      color: "white",
      hover_color: "#fee3a1"
    },
    INJK: {
      name: "Jammu and Kashmir",
      color: "orange",
      hover_color: "#f0474a"
    },
    INKA: {
      name: "Karnataka",
      color: "#23cd23",
      hover_color: "#8b52a1"
    },
    INKL: {
      name: "Kerala",
      color: "#23cd23",
      hover_color: "#f7b936"
    },
    INLA: {
      name: "Ladakh",
      color: "orange",
      hover_color: "#a9defd"
    },
    INLD: {
      name: "Lakshadweep",
      hover_color: ""
    },
    INMH: {
      name: "Maharashtra",
      color: "white",
      hover_color: "#f59394",
      url:"https://en.wikipedia.org/wiki/Maharashtra"
    },
    INML: {
      name: "Meghalaya",
      color: "white",
      hover_color: "#feba26"
    },
    INMN: {
      name: "Manipur",
      color: "white",
      hover_color: "#9f6cb4"
    },
    INMP: {
      name: "Madhya Pradesh",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ashoka_Chakra_1.svg/410px-Ashoka_Chakra_1.svg.png?20060401072939",
      image_size: 0.65,
      image_color: "#ffffff",
      hover_color: "#e5cae4"
    },
    INMZ: {
      name: "Mizoram",
      color: "white",
      hover_color: "#fde597"
    },
    INNL: {
      name: "Nagaland",
      color: "white",
      hover_color: "#a06eaa"
    },
    INOR: {
      name: "Orissa",
      color: "white",
      hover_color: "#fbb51b"
    },
    INPB: {
      name: "Punjab",
      color: "orange",
      hover_color: "#fdbb23"
    },
    INPY: {
      name: "Puducherry",
      hover_color: "#314d07"
    },
    INRJ: {
      name: "Rajasthan",
      color: "white",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ashoka_Chakra_1.svg/410px-Ashoka_Chakra_1.svg.png?20060401072939",
      image_position: "manual",
      image_x: 0.7,
      image_y: 0.55,
      image_size: 0.65,
      image_color: "#ffffff",
      hover_color: "#9c6daf"
    },
    INSK: {
      name: "Sikkim",
      color: "orange",
      hover_color: "#a7cd3c"
    },
    INTG: {
      name: "Telangana",
      color: "#23cd23",
      hover_color: "#a7cd3c"
    },
    INTN: {
      name: "Tamil Nadu",
      color: "#23cd23",
      hover_color: "#97cb3b"
    },
    INTR: {
      name: "Tripura",
      color: "white",
      hover_color: "#ef4546"
    },
    INUP: {
      name: "Uttar Pradesh",
      color: "white",
      image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Ashoka_Chakra_1.svg/410px-Ashoka_Chakra_1.svg.png?20060401072939",
      image_position: "manual",
      image_x: -0.1,
      image_y: 0.6155,
      image_size: 0.65,
      image_color: "#ffffff",
      hover_color: "#b6d44e"
    },
    INUT: {
      name: "Uttaranchal",
      color: "orange",
      hover_color: "#b98bbd"
    },
    INWB: {
      name: "West Bengal",
      color: "white",
      hover_color: "#4dc2ed"
    }
  },
  locations: {},
  labels: {
    INAN: {
      name: "Andaman and Nicobar",
      parent_id: "INAN"
    },
    INAP: {
      name: "Andhra Pradesh",
      parent_id: "INAP"
    },
    INAR: {
      name: "Arunachal Pradesh",
      parent_id: "INAR"
    },
    INAS: {
      name: "Assam",
      parent_id: "INAS"
    },
    INBR: {
      name: "Bihar",
      parent_id: "INBR"
    },
    INCH: {
      name: "Chandigarh",
      parent_id: "INCH"
    },
    INCT: {
      name: "Chhattisgarh",
      parent_id: "INCT"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      parent_id: "INDH"
    },
    INDL: {
      name: "Delhi",
      parent_id: "INDL"
    },
    INGA: {
      name: "Goa",
      parent_id: "INGA"
    },
    INGJ: {
      name: "Gujarat",
      parent_id: "INGJ"
    },
    INHP: {
      name: "Himachal Pradesh",
      parent_id: "INHP"
    },
    INHR: {
      name: "Haryana",
      parent_id: "INHR"
    },
    INJH: {
      name: "Jharkhand",
      parent_id: "INJH"
    },
    INJK: {
      name: "Jammu and Kashmir",
      parent_id: "INJK"
    },
    INKA: {
      name: "Karnataka",
      parent_id: "INKA"
    },
    INKL: {
      name: "Kerala",
      parent_id: "INKL"
    },
    INLA: {
      name: "Ladakh",
      parent_id: "INLA"
    },
    INLD: {
      name: "Lakshadweep",
      parent_id: "INLD"
    },
    INMH: {
      name: "Maharashtra",
      parent_id: "INMH"
    },
    INML: {
      name: "Meghalaya",
      parent_id: "INML"
    },
    INMN: {
      name: "Manipur",
      parent_id: "INMN"
    },
    INMP: {
      name: "Madhya Pradesh",
      parent_id: "INMP"
    },
    INMZ: {
      name: "Mizoram",
      parent_id: "INMZ"
    },
    INNL: {
      name: "Nagaland",
      parent_id: "INNL"
    },
    INOR: {
      name: "Orissa",
      parent_id: "INOR"
    },
    INPB: {
      name: "Punjab",
      parent_id: "INPB"
    },
    INPY: {
      name: "Puducherry",
      parent_id: "INPY"
    },
    INRJ: {
      name: "Rajasthan",
      parent_id: "INRJ"
    },
    INSK: {
      name: "Sikkim",
      parent_id: "INSK"
    },
    INTG: {
      name: "Telangana",
      parent_id: "INTG"
    },
    INTN: {
      name: "Tamil Nadu",
      parent_id: "INTN"
    },
    INTR: {
      name: "Tripura",
      parent_id: "INTR"
    },
    INUP: {
      name: "Uttar Pradesh",
      parent_id: "INUP"
    },
    INUT: {
      name: "Uttaranchal",
      parent_id: "INUT"
    },
    INWB: {
      name: "West Bengal",
      parent_id: "INWB"
    }
  },
  legend: {
    entries: []
  },
  regions: {}
};