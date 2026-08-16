import {
  Waves,
  UserCheck,
  Users,
  Zap,
  Baby,
  HeartPulse,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Waves,
  UserCheck,
  Users,
  Zap,
  Baby,
  HeartPulse,
  Briefcase,
};

export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const Icon = iconMap[name] ?? Waves;
  return <Icon className={className} />;
}
