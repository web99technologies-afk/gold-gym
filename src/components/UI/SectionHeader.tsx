import { motion } from 'framer-motion';
import { cn } from '../../utils/cn';

interface SectionHeaderProps {
  subtitle: string;
  title: string;
  className?: string;
  align?: 'left' | 'center';
}

export const SectionHeader = ({ subtitle, title, className, align = 'center' }: SectionHeaderProps) => {
  return (
    <div className={cn(
      "mb-12",
      align === 'center' ? "text-center" : "text-left",
      className
    )}>
      <motion.p
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-gold-500 font-heading font-semibold uppercase tracking-[0.2em] mb-4 text-sm"
      >
        {subtitle}
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-4xl md:text-6xl font-heading font-black uppercase text-white gold-glow"
      >
        {title}
      </motion.h2>
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className={cn(
          "h-1 bg-gold-500 mt-6",
          align === 'center' ? "mx-auto" : ""
        )}
      />
    </div>
  );
};
