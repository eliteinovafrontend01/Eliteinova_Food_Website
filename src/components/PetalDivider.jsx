
export default function PetalDivider({ flip = false, fill = "#FFFDFB", className = "" }) {
  return (
    <div className={`w-full leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 60"
        className={`w-full h-[40px] md:h-[60px] ${flip ? "rotate-180" : ""}`}
        preserveAspectRatio="none"
      >
        <path
          fill={fill}
          d="M0,0 
             C50,60 100,0 150,30 
             C200,60 250,0 300,30 
             C350,60 400,0 450,30 
             C500,60 550,0 600,30 
             C650,60 700,0 750,30 
             C800,60 850,0 900,30 
             C950,60 1000,0 1050,30 
             C1100,60 1150,0 1200,30 
             L1200,0 L0,0 Z"
        />
      </svg>
    </div>
  );
}