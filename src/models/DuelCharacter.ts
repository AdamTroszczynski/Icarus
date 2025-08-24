export type DuelCharacter = {
  id: number;
  server_id: string;
  name: string;
  level: number;
  honor: number;
  gender: 'm' | 'f';
  has_missile: boolean;
  stat_total_stamina: number;
  stat_total_strength: number;
  stat_total_critical_rating: number;
  stat_total_dodge_rating: number;
  stat_weapon_damage: number;
  online_status: number;
  total_stats: number;
};
