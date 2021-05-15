export default {
  name: "content",
  title: "Content",
  type: "array",
  of: [
    {
      type: "block",
    },
    {
      type: "image",
      fields: [
        {
          name: "caption",
          title: "Caption",
          type: "string",
          options: {
            isHighlighted: true,
          },
        },
      ],
    },
  ],
};
