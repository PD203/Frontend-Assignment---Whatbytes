import { Star } from "lucide-react";

export default function Rating({ value }: { value: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-4 w-4 ${
            star <= value ? "fill-star text-star" : "text-border"
          }`}
        />
      ))}
    </div>
  );
}
