export default function ResumePage() {
  return (
    <div className="flex justify-center p-4">
      <iframe
        src="/resume.pdf"
        className="w-full h-screen rounded-lg border"
        title="Resume"
      />
    </div>
  );
}
