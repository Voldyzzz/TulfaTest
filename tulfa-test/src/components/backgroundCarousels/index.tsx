const BackgroundCarousels = ({ children }: { children: React.ReactNode }) => {
  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div className="backgroundCarousels">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} className="backgroundCarousels-carousel"></span>
        ))}
      </div>
      {children}
    </div>
  );
};

export default BackgroundCarousels;
