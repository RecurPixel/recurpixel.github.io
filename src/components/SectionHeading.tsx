const SectionHeading = ({ title, id }: { title: string; id: string }) => (
  <div id={id} className="pt-20 mb-8">
    <p className="font-mono text-xs text-primary mb-1">
      # {title.toLowerCase().replace(/\s/g, "_")}
    </p>
    <h2 className="text-xl font-semibold text-foreground tracking-tight">{title}</h2>
  </div>
);

export default SectionHeading;
