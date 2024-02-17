import Questions from "./Questions";
import AuthForm from "./AuthForm";

const QuestionSection = () => {
  return (
    <>
      <div className="flex w-full flex-col items-center gap-12 bg-black px-5 py-16">
        <div className="h1 text-center text-white">
          Frequently Asked Questions
        </div>

        <div className="flex w-full max-w-3xl justify-center">
          <Questions />
        </div>

        <div
          className="
          my-auto flex w-full flex-col items-center justify-center
          gap-5 px-2
          "
        >
          <div className="p text-center text-white">
            Ready to watch? Sign In or create your membership.
          </div>
          <AuthForm />
        </div>
      </div>
    </>
  );
};

export default QuestionSection;
