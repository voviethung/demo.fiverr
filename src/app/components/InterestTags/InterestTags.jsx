
export default function InterestTags() {
  const tags = [
    "Background Removal", "Thumbnails Design", "Book Cover Design", "Minimalist Logo Design",
    "Twitch Overlay Design", "3D Modeling & Rendering", "MidJourney Artists",
    "Children Illustrations", "Watercolor Logo Design", "2D Drawings & Floor Plans",
    "3D Rendering & Modeling", "Pattern Making & Fashion", "Character Design",
    "Custom Emotes & Badges", "Rapid Prototyping", "Pixel Art Illustration",
    "3D Logo Design", "Label Design", "Technical Drawing", "Portraits Retouching"
  ];

  return (
    <div className="container py-5 text-center">
      <h3 className="mb-4 fw-semibold">You might be interested in Graphics & Design</h3>
      <div className="d-flex justify-content-center flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span key={index} className="badge bg-light text-muted fs-6 fw-normal shadow-sm px-3 py-2" style={{ borderRadius: '1rem' }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
