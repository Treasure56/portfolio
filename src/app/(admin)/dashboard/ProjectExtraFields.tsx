import { projectCategories } from "@/data/site";

const label = "text-xs font-semibold text-gray-500 uppercase tracking-wider";

/** Extra inputs shared by the New and Edit project forms. */
export default function ProjectExtraFields({
  category,
  tech,
  video,
  role,
  featured,
}: {
  category?: string | null;
  tech?: string | null;
  video?: string | null;
  role?: string | null;
  featured?: boolean | null;
}) {
  return (
    <>
      <div className="flex flex-col gap-1.5">
        <label htmlFor="role" className={label}>
          My role
        </label>
        <input
          id="role"
          name="role"
          type="text"
          defaultValue={role ?? ""}
          placeholder="Mobile App, Admin Dashboard, Marketing Site"
          className="form-input"
        />
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="category" className={label}>
          Type
        </label>
        <select
          id="category"
          name="category"
          defaultValue={category ?? ""}
          className="form-input bg-white"
        >
          <option value="">Not set</option>
          {projectCategories.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="tech" className={label}>
          Tech used
        </label>
        <input
          id="tech"
          name="tech"
          type="text"
          defaultValue={tech ?? ""}
          placeholder="Next.js, Tailwind CSS, Supabase"
          className="form-input"
        />
        <p className="text-xs text-gray-500">Comma separated.</p>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="video" className={label}>
          Video URL (optional)
        </label>
        <input
          id="video"
          name="video"
          type="url"
          defaultValue={video ?? ""}
          placeholder="https://.../clip.mp4"
          className="form-input"
        />
        <p className="text-xs text-gray-500">
          A direct .mp4 / .webm link. Shown on the project page.
        </p>
      </div>

      <label className="flex items-center gap-3 text-sm text-gray-700">
        <input
          name="featured"
          type="checkbox"
          defaultChecked={Boolean(featured)}
          className="size-4 accent-[var(--primary)]"
        />
        Feature this project (large card at the top of the Work section)
      </label>
    </>
  );
}

const allowed = projectCategories.map((c) => c.value) as string[];

/** Reads the extra fields from submitted form data. */
export function readExtraFields(formData: FormData) {
  const category = String(formData.get("category") ?? "");
  return {
    category: allowed.includes(category) ? category : undefined,
    tech: String(formData.get("tech") ?? "").trim(),
    video: String(formData.get("video") ?? "").trim(),
    role: String(formData.get("role") ?? "").trim(),
    featured: formData.get("featured") === "on",
  };
}
