import * as Icons from "lucide-react";

export function resolveIcon(name) {
  return Icons[name] ?? Icons.Circle;
}
