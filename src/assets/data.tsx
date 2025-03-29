import { HiOutlineLocationMarker } from "react-icons/hi";
import { Fields, Steps } from "../typs";
import { FaRegMap } from "react-icons/fa";
import {
  BsFillPersonLinesFill,
  BsHouseDown,
  BsHouseUp,
  BsPeopleFill,
  BsPersonFill,
} from "react-icons/bs";
import { FaPeopleRoof } from "react-icons/fa6";
import { MdPersonOff } from "react-icons/md";
import { HiOutlineClipboardDocumentList } from "react-icons/hi2";
import { FiGift, FiHelpCircle, FiHome } from "react-icons/fi";

const areaOfLandFields: Fields = [
  {
    type: "slider",
    props: {
      name: " area_of_land",
      label: "Fläches",
      defaultValue: "545",
      min: 50,
      max: 5000,
      hasInput: true,
    },
  },
];

const StepsOfRealEstateTransaction: Steps = [
  {
    name: "Verkauf",
    title: "Wann planen Sie in etwa den Verkauf Ihrer Immobilie?",
    icon: <BsHouseUp />,
    fields: areaOfLandFields,
  },
  {
    name: "Kauf",
    title: "Wann planen Sie in etwa den Kauf ihrer Immobilie?",
    icon: <BsHouseDown />,
    fields: areaOfLandFields,
  },
  {
    name: "Finanzamt / Grundsteuer",
    title: "Wie groß ist die Grundstücksfläche?",
    icon: <HiOutlineClipboardDocumentList />,
    fields: areaOfLandFields,
  },
  {
    name: "Erbe oder Schenkung",
    title: "Wie groß ist die Grundstücksfläche?",
    icon: <FiGift />,
    fields: areaOfLandFields,
  },
  {
    name: "Vermögensaufstellung",
    title: "Wie groß ist die Grundstücksfläche?",
    fields: areaOfLandFields,
    icon: <FiHome />,
  },
  {
    name: "Anderer Hintergrund (Scheidung)",
    title: "Für welchen Zweck wird die Bewertung benötigt?",
    description:
      "Bitte geben Sie uns mehr Hintergrundinformationen für die Bewertungsanfrage:",
    icon: <FiHelpCircle />,
    fields: [
      {
        type: "text",
        props: {
          name: "request_reason_detail",
          label: "",
          asTextArea: true,
          placeholder: "Anfragegrund ...",
        },
      },
    ],
  },
];

export const form: Steps = [
  {
    name: "start",
    title: "Jetzt aktuellen Bodenrichtwert abfragen!",
    description: "Für welches Grundstück benötigen Sie den Bodenrichtwert?",
    steps: [
      {
        name: "Adresse",
        title: "Wo befindet sich das Grundstück?",
        icon: <HiOutlineLocationMarker />,
        fields: [
          {
            type: "text",
            props: {
              name: "property_street",
              label: "Straße",
              isRequired: true,
              placeholder: "Friedrichstraße",
            },
          },
          {
            type: "text",
            props: {
              name: "property_house_number",
              label: "Hausnummer",
              isRequired: true,
              placeholder: "158",
            },
          },
          {
            type: "text",
            props: {
              name: "property_postalcode",
              label: "PLZ",
              isRequired: true,
              placeholder: "10117",
            },
          },
          {
            type: "text",
            props: {
              name: "property_city",
              label: "Stadt",
              isRequired: true,
              placeholder: "Berlin",
            },
          },
        ],
        steps: [
          {
            name: "Informationen zum Eigentümer",
            title: "Sind Sie der Eigentümer des Grundstücks?",
            steps: [
              {
                name: "Ja, ich bin der Eigentümer .",
                title: "Für welchen Zweck wird die Bewertung benötigt?",
                description: "",
                icon: <BsPersonFill />,
                steps: StepsOfRealEstateTransaction,
              },
              {
                name: "Ja, ich bin Angehöriger des Eigentümers.",
                title: "Für welchen Zweck wird die Bewertung benötigt?",
                description: "",
                icon: <FaPeopleRoof />,
                steps: StepsOfRealEstateTransaction,
              },
              {
                name: "Ja, ich bin Angehöriger des Eigentümers .",
                title: "Für welchen Zweck wird die Bewertung benötigt?",
                description: "",
                icon: <BsPeopleFill />,
                steps: StepsOfRealEstateTransaction,
              },
              {
                name: "Nein, ich bin Makler .",
                title: "Für welchen Zweck wird die Bewertung benötigt?",
                description: "",
                icon: <BsFillPersonLinesFill />,
                steps: StepsOfRealEstateTransaction,
              },
              {
                name: "Nein, ich bin  nicht der Eigentümer .",
                title: "Für welchen Zweck wird die Bewertung benötigt?",
                description: "",
                icon: <MdPersonOff />,
                steps: StepsOfRealEstateTransaction,
              },
            ],
          },
        ],
      },
      {
        name: "Flurstück angeben",
        title: "Flurstück angeben",
        icon: <FaRegMap />,
      },
    ],
  },
];
