var simplemaps_countrymap_mapdata = {
  main_settings: {
    //General settings
    width: "600",
    //'700' or 'responsive'
    background_color: "#FFFFFF",
    background_transparent: "yes",
    border_color: "#ffffff",

    //State defaults
    state_description: "Click to view more",
    state_color: "#88A4BC",
    state_hover_color: "#3B729F",
    state_url: "",
    border_size: 1.5,
    all_states_inactive: "no",
    all_states_zoomable: "no",

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
    label_size: 16,
    label_font: "Arial",
    label_display: "auto",
    label_scale: "yes",
    hide_labels: "no",
    hide_eastern_labels: "no",

    //Zoom settings
    zoom: "yes",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,

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
    state_image_position: "center",
    location_image_url: ""
  },
  state_specific: {
    INAN: {
      name: "Andaman and Nicobar",
      hover_color: "#52bbdf",
      color: "grey",
      description: 'Andaman and Nicobar'
    },
    INAP: {
      name: "Andhra Pradesh",
      hover_color: "#f3757a",
      color: "grey"
    },
    INAR: {
      name: "Arunachal Pradesh",
      hover_color: "#ee4d4a",
      color: "grey"
    },
    INAS: {
      name: "Assam",
      hover_color: "#b9d54e",
      color: "grey"
    },
    INBR: {
      name: "Bihar",
      hover_color: "#8a51a0",
      color: "grey"
    },
    INCH: {
      name: "Chandigarh",
      hover_color: "orange",
      color: "grey"
    },
    INCT: {
      name: "Chhattisgarh",
      hover_color: "#adddf7",
      color: "grey"
    },
    INDH: {
      name: "Dādra and Nagar Haveli and Damān and Diu",
      hover_color: "orange",
      color: "grey"
    },
    INDL: {
      name: "Delhi",
      hover_color: "purple",
      color: "orange"
    },
    INGA: {
      name: "Goa",
      hover_color: "#f4c74c",
      color: "grey"
    },
    INGJ: {
      name: "Gujarat",
      hover_color: "#ffe59d",
      color: "grey",
      url: "https://www.gujarattourism.com/"
    },
    INHP: {
      name: "Himachal Pradesh",
      hover_color: "#b3d245",
      color: "grey"
    },
    INHR: {
      name: "Haryana",
      hover_color: "#4fc1ed",
      color: "grey"
    },
    INJH: {
      name: "Jharkhand",
      hover_color: "#f5e4ab",
      color: "grey"
    },
    INJK: {
      name: "Jammu and Kashmir",
      hover_color: "#f0474a",
      color: "grey"
    },
    INKA: {
      name: "Karnataka",
      hover_color: "#8b52a1",
      color: "grey"
    },
    INKL: {
      name: "Kerala",
      hover_color: "#fcbf33",
      color: "grey"
    },
    INLA: {
      name: "Ladakh",
      hover_color: "#abdef4",
      color: "grey"
    },
    INLD: {
      name: "Lakshadweep",
      hover_color: "#4ca9cc",
      color: "grey"
    },
    INMH: {
      name: "Maharashtra",
      hover_color: "#f59394",
      color: "grey"
    },
    INML: {
      name: "Meghalaya",
      hover_color: "#f6b917",
      color: "grey"
    },
    INMN: {
      name: "Manipur",
      hover_color: "#9d6bb6",
      color: "grey"
    },
    INMP: {
      name: "Madhya Pradesh",
      hover_color: "#e3cbe3",
      color: "grey"
    },
    INMZ: {
      name: "Mizoram",
      hover_color: "#fee4a3",
      color: "grey"
    },
    INNL: {
      name: "Nagaland",
      hover_color: "#4ac2e3",
      color: "grey"
    },
    INOR: {
      name: "Orissa",
      hover_color: "#fcb51a",
      color: "grey"
    },
    INPB: {
      name: "Punjab",
      hover_color: "#febc1f",
      color: "grey"
    },
    INPY: {
      name: "Puducherry",
      hover_color: "#32560c",
      color: "grey"
    },
    INRJ: {
      name: "Rajasthan",
      hover_color: "#9e6daf",
      color: "grey"
    },
    INSK: {
      name: "Sikkim",
      hover_color: "#feb721",
      color: "grey"
    },
    INTG: {
      name: "Telangana",
      hover_color: "#a7cd39",
      color: "grey"
    },
    INTN: {
      name: "Tamil Nadu",
      hover_color: "#97cb3a",
      color: "grey"
    },
    INTR: {
      name: "Tripura",
      hover_color: "#f14343",
      color: "grey"
    },
    INUP: {
      name: "Uttar Pradesh",
      hover_color: "#b6d44e",
      color: "grey"
    },
    INUT: {
      name: "Uttaranchal",
      hover_color: "#b48eba",
      color: "grey"
    },
    INWB: {
      name: "West Bengal",
      hover_color: "#4cc1ec",
      color: "grey"
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