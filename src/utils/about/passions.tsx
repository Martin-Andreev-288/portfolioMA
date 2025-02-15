import { Globe, BookOpen, Leaf, PawPrint, Dumbbell } from "lucide-react";

export const passions = [
  {
    title: "Traveling",
    icon: <Globe className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />,
    description:
      "Exploring diverse cultures and landscapes to find inspiration",
    imageUrl:
      "bg-[url('src/assets/travel.png')] bg-center bg-no-repeat bg-cover",
  },
  {
    title: "Reading",
    icon: <BookOpen className="w-6 h-6 text-amber-600 dark:text-amber-400" />,
    description: "Getting lost in fictional worlds through beloved books",
    imageUrl: "bg-[url('src/assets/read.png')] bg-center bg-no-repeat bg-cover",
  },
  {
    title: "Healthy Eating",
    icon: <Leaf className="w-6 h-6 text-lime-600 dark:text-lime-400" />,
    description: "Experimenting with balanced recipes and superfoods",
    imageUrl:
      "bg-[url('src/assets/healthy.png')] bg-center bg-no-repeat bg-cover",
  },
  {
    title: "Animal Welfare",
    icon: <PawPrint className="w-6 h-6 text-rose-600 dark:text-rose-400" />,
    description:
      "Finding joy in animal companionship and nature's fascinating creatures",
    imageUrl:
      "bg-[url('src/assets/animal.png')] bg-center bg-no-repeat bg-cover",
  },
  {
    title: "Sports & Fitness",
    icon: <Dumbbell className="w-6 h-6 text-blue-600 dark:text-blue-400" />,
    description: "Maintaining physical/mental balance through training",
    imageUrl:
      "bg-[url('src/assets/sport.png')] bg-center bg-no-repeat bg-cover",
  },
];
