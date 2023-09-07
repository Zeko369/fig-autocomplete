import { dockerImagesGenerator } from "./docker";

const completionSpec: Fig.Spec = {
  name: "dive",
  args: {
    name: "image",
    description: "The image to analyze",
    generators: dockerImagesGenerator,
  },
  subcommands: [
    {
      name: "build",
      description:
        "Builds and analyzes a docker image from a Dockerfile (this is a thin wrapper for the `docker build` command)",
      // loadSpec: { name: "build", loadSpec: "docker" },
    },
    { name: "help", description: "Help about any command" },
    {
      name: "version",
      description: "Print the version number and exit (also --version)",
    },
  ],
};

export default completionSpec;
