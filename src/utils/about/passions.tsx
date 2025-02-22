import { Globe, BookOpen, Leaf, PawPrint, Dumbbell } from "lucide-react";
import travelBg from "@/assets/travel.png";
import readBg from "@/assets/read.png";
import healthyBg from "@/assets/healthy.png";
import animalBg from "@/assets/animal.png";
import sportBg from "@/assets/sport.png";

export const passions = [
  {
    title: "Traveling",
    icon: <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Exploring diverse cultures and landscapes to find inspiration",
    imageStyle: {
      backgroundImage: `url(${sportBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  {
    title: "Reading",
    icon: <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    description: "Getting lost in fictional worlds through beloved books",
    imageStyle: {
      backgroundImage: `url(${readBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  {
    title: "Healthy Eating",
    icon: <Leaf className="w-6 h-6 text-lime-600 dark:text-lime-400" />,
    description: "Experimenting with balanced recipes and superfoods",
    imageStyle: {
      backgroundImage: `url(${healthyBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  {
    title: "Animal Welfare",
    icon: <PawPrint className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
    description:
      "Finding joy in animal companionship and nature's fascinating creatures",
    imageStyle: {
      backgroundImage: `url(${animalBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
  {
    title: "Sports & Fitness",
    icon: <Dumbbell className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    description: "Maintaining physical/mental balance through training",
    imageStyle: {
      backgroundImage: `url(${travelBg})`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    },
  },
];
