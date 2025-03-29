import { HiOutlineLocationMarker } from "react-icons/hi";
import { Steps } from "../typs";
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

const StepsOfRealEstateTransaction: Steps = [
  {
    name: "Verkauf",
    title: "Wann planen Sie in etwa den Verkauf Ihrer Immobilie?",
    icon: <BsHouseUp />,
  },
  {
    name: "Kauf",
    title: "Wann planen Sie in etwa den Kauf ihrer Immobilie?",
    icon: <BsHouseDown />,
  },
  {
    name: "Finanzamt / Grundsteuer",
    title: "Wie groß ist die Grundstücksfläche?",
    icon: <HiOutlineClipboardDocumentList />,
  },
  {
    name: "Erbe oder Schenkung",
    title: "Wie groß ist die Grundstücksfläche?",
    icon: <FiGift />,
  },
  {
    name: "Vermögensaufstellung",
    title: "Wie groß ist die Grundstücksfläche?",
    icon: <FiHome />,
  },
  {
    name: "Anderer Hintergrund (Scheidung)",
    title: "Für welchen Zweck wird die Bewertung benötigt?",
    description:
      "Bitte geben Sie uns mehr Hintergrundinformationen für die Bewertungsanfrage:",
    icon: <FiHelpCircle />,
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
        title: "Adresse",
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
