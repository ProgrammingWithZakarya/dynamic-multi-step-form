import { Steps } from "../typs";

export const form: Steps = [
  {
    name: "start",
    title: "Start Process",
    description: "To complete the form, please select an option.",
    steps: [
      {
        name: "user_type",
        title: "User Type",
        description: "Please specify your user type.",
        steps: [
          {
            name: "personal_info",
            title: "Personal Information",
            description: "Please enter your personal information.",
            fields: [
              {
                type: "text",
                props: {
                  name: "first_name",
                  label: "First Name",
                  isRequired: true,
                  placeholder: "e.g., John",
                },
              },
              {
                type: "text",
                props: {
                  name: "last_name",
                  label: "Last Name",
                  isRequired: true,
                  placeholder: "e.g., Doe",
                },
              },
              {
                type: "phone",
                props: {
                  name: "phone_number",
                  label: "Phone Number",
                  isRequired: true,
                },
              },
            ],
            steps: [
              {
                name: "personal_address",
                title: "Personal Address",
                description: "Please enter your address.",
                fields: [
                  {
                    type: "text",
                    props: {
                      name: "city",
                      label: "City",
                      isRequired: true,
                      placeholder: "e.g., New York",
                    },
                  },
                  {
                    type: "text",
                    props: {
                      name: "street",
                      label: "Street",
                      isRequired: false,
                      placeholder: "e.g., 5th Avenue",
                    },
                  },
                  {
                    type: "number",
                    props: {
                      name: "postal_code",
                      label: "Postal Code",
                      isRequired: false,
                      placeholder: "123456",
                    },
                  },
                ],
                steps: [
                  {
                    name: "personal_preferences",
                    title: "User Preferences",
                    description: "Please select your preferences.",
                    fields: [
                      {
                        type: "radio",
                        props: {
                          name: "theme",
                          options: [
                            { id: "dark", label: "Dark Mode", value: "dark" },
                            {
                              id: "light",
                              label: "Light Mode",
                              value: "light",
                            },
                          ],
                        },
                      },
                      {
                        type: "checkbox",
                        props: {
                          name: "how-to-notify",
                          options: [
                            {
                              id: "newsletter",
                              value: "newsletter",
                              label: "Subscribe to Newsletter",
                            },
                          ],
                        },
                      },
                      {
                        type: "switch",
                        props: { name: "notifications", defaultChecked: true },
                      },
                    ],
                    hasSubmitButton: true,
                  },
                ],
              },
            ],
          },
          {
            name: "business_info",
            title: "Business Information",
            description: "Please enter your business information.",
            fields: [
              {
                type: "text",
                props: {
                  name: "business_name",
                  label: "Business Name",
                  isRequired: true,
                },
              },
              {
                type: "text",
                props: {
                  name: "business_owner",
                  label: "Owner's Name",
                  isRequired: true,
                },
              },
              {
                type: "phone",
                props: {
                  name: "business_phone",
                  label: "Business Phone Number",
                  isRequired: true,
                },
              },
            ],
            steps: [
              {
                name: "business_address",
                title: "Business Address",
                description: "Please enter your business address.",
                fields: [
                  {
                    type: "text",
                    props: {
                      name: "business_city",
                      label: "City",
                      isRequired: true,
                    },
                  },
                  {
                    type: "text",
                    props: {
                      name: "business_street",
                      label: "Street",
                      isRequired: false,
                    },
                  },
                  {
                    type: "number",
                    props: {
                      name: "business_postal_code",
                      label: "Postal Code",
                      isRequired: false,
                    },
                  },
                ],
                steps: [
                  {
                    name: "business_preferences",
                    title: "Business Preferences",
                    description: "Please select your business preferences.",
                    fields: [
                      {
                        type: "radio",
                        props: {
                          name: "business_theme",
                          options: [
                            { id: "dark", label: "Dark Mode", value: "dark" },
                            {
                              id: "light",
                              label: "Light Mode",
                              value: "light",
                            },
                          ],
                        },
                      },
                      {
                        type: "checkbox",
                        props: {
                          name: "ow-to-receive-ads-for-business",
                          options: [
                            {
                              id: "business_newsletter",
                              value: "business_newsletter",
                              label: "Subscribe to Newsletter",
                            },
                          ],
                        },
                      },
                      {
                        type: "switch",
                        props: {
                          name: "business_notifications",
                          defaultChecked: true,
                        },
                      },
                    ],
                    hasSubmitButton: true,
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];
