import GoogleIcon from "@/icons/google.svg";
import GitHubIcon from "@/icons/github.svg";
const SocialAuth = () => {
  return (
    <div className="grid grid-cols-2 gap-4 pt-2">
      <div className="w-full border-blue-400 hover:bg-blue-50 border-2 rounded-md flex items-center justify-center gap-2 py-2 cursor-pointer ">
        <GoogleIcon />

        <span>Google</span>
      </div>

      <div className="w-full border-blue-400 hover:bg-blue-50 border-2 rounded-md flex items-center justify-center gap-2 py-2 cursor-pointer ">
        <GitHubIcon />
        <span>GitHub</span>
      </div>
    </div>
  );
};

export default SocialAuth;
