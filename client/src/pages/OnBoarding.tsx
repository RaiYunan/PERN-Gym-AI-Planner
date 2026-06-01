import { useAuth } from "@/context/AuthContext";
import { RedirectToSignIn, SignedIn } from "@neondatabase/neon-js/auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useState } from "react";

const goalOptions = [
  { value: "bulk", label: "Build Muscle (Bulk)" },
  { value: "cut", label: "Lose Fat (Cut)" },
  { value: "recomp", label: "Body Recomposition" },
  { value: "strength", label: "Build Strength" },
  { value: "endurance", label: "Improve Endurance" },
];

const experienceOptions = [
  { value: "beginner", label: "Beginner (0-1 years)" },
  { value: "intermediate", label: "Intermediate (1-3 years)" },
  { value: "advanced", label: "Advanced (3+ years)" },
];

const daysOptions = [
  { value: "2", label: "2 days per week" },
  { value: "3", label: "3 days per week" },
  { value: "4", label: "4 days per week" },
  { value: "5", label: "5 days per week" },
  { value: "6", label: "6 days per week" },
];

const sessionOptions = [
  { value: "30", label: "30 minutes" },
  { value: "45", label: "45 minutes" },
  { value: "60", label: "60 minutes" },
  { value: "90", label: "90 minutes" },
];

const equipmentOptions = [
  { value: "full_gym", label: "Full Gym Access" },
  { value: "home", label: "Home Gym" },
  { value: "dumbbells", label: "Dumbbells Only" },
];

const splitOptions = [
  { value: "full_body", label: "Full Body" },
  { value: "upper_lower", label: "Upper/Lower Split" },
  { value: "ppl", label: "Push/Pull/Legs" },
  { value: "custom", label: "Let AI Decide" },
];
const OnBoarding = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({
    goal: "bulk",
    experience: "intermediate",
    daysPerWeek: "4",
    sessionLength: "60",
    equipment: "full_gym",
    injuries: "",
    preferredSplit: "upper_lower",
  });

  function updateForm(field: string, value: string) {
    console.log(formData);
    setFormData((prev) => ({ ...prev, [field]: value }));
    console.log(formData);
  }
  if (!user) {
    return <RedirectToSignIn />;
  }
  return (
    <SignedIn>
      <div className="min-h-screen bg-zinc-950 pt-24 pb-12 px-4 sm:px-6">
        <div className="max-w-lg mx-auto">
          {/* Progress Indicator */}
          <div className="mb-8 flex items-center gap-3">
            <div className="flex items-center gap-2">
              <span className="w-6 h-6 rounded-full bg-lime-400 text-zinc-950 text-xs font-bold flex items-center justify-center">
                1
              </span>
              <span className="text-sm text-lime-400 font-medium">
                Questionnaire
              </span>
            </div>
            <div className="flex-1 h-px bg-zinc-800">
              <div className="w-1/2 h-full bg-lime-400/50"></div>
            </div>
            <div className="flex items-center gap-2 opacity-40">
              <span className="w-6 h-6 rounded-full bg-zinc-800 text-zinc-400 text-xs font-bold flex items-center justify-center">
                2
              </span>
              <span className="text-sm text-zinc-500">Generating</span>
            </div>
          </div>

          {/* Step1: Questionnaire */}
          <Card className="bg-zinc-900 border-zinc-800 shadow-none">
            <CardHeader className="pb-6">
              <CardTitle className="text-xl text-zinc-100 font-medium">
                Tell us about yourself
              </CardTitle>
              <CardDescription className="text-zinc-500 text-sm mt-1">
                Help us create the perfect plan for you
              </CardDescription>
            </CardHeader>

            <CardContent>
              <form className="space-y-6">
                {/* Goal */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="goal"
                    className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
                  >
                    Primary goal
                  </label>
                  <Select
                    value={formData.goal}
                    onValueChange={(value) => updateForm("goal", value)}
                  >
                    <SelectTrigger className="w-full bg-zinc-950 border-zinc-800 text-zinc-100 focus:ring-0 focus:border-lime-400/50 transition-colors">
                      <SelectValue placeholder="Select goal" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {goalOptions.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="text-zinc-300 focus:bg-lime-400/10 focus:text-lime-400"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Experience */}
                <div className="space-y-1.5">
                  <label
                    htmlFor="experience"
                    className="text-xs font-medium text-zinc-400 uppercase tracking-wider"
                  >
                    Experience
                  </label>
                  <Select
                    value={formData.experience}
                    onValueChange={(value) => updateForm("experience", value)}
                  >
                    <SelectTrigger className="w-full bg-zinc-950 border-zinc-800 text-zinc-100 focus:ring-0 focus:border-lime-400/50 transition-colors">
                      <SelectValue placeholder="Select experience" />
                    </SelectTrigger>
                    <SelectContent className="bg-zinc-900 border-zinc-800">
                      {experienceOptions.map((opt) => (
                        <SelectItem
                          key={opt.value}
                          value={opt.value}
                          className="text-zinc-300 focus:bg-lime-400/10 focus:text-lime-400"
                        >
                          {opt.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Schedule */}
                <div className="space-y-1.5">
                  <span className="text-xs font-medium text-zinc-400 uppercase tracking-wider">
                    Schedule
                  </span>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1.5">
                      <label
                        htmlFor="daysForWeek"
                        className="text-xs text-zinc-500"
                      >
                        Days per week
                      </label>
                      <Select
                        value={formData.daysPerWeek}
                        onValueChange={(value) =>
                          updateForm("daysPerWeek", value)
                        }
                      >
                        <SelectTrigger className="w-full bg-zinc-950 border-zinc-800 text-zinc-100 focus:ring-0 focus:border-lime-400/50 transition-colors">
                          <SelectValue placeholder="Days" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-800">
                          {daysOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value}
                              className="text-zinc-300 focus:bg-lime-400/10 focus:text-lime-400"
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="sessionLength"
                        className="text-xs text-zinc-500"
                      >
                        Session length
                      </label>
                      <Select
                        value={formData.sessionLength}
                        onValueChange={(value) =>
                          updateForm("sessionLength", value)
                        }
                      >
                        <SelectTrigger className="w-full bg-zinc-950 border-zinc-800 text-zinc-100 focus:ring-0 focus:border-lime-400/50 transition-colors">
                          <SelectValue placeholder="Minutes" />
                        </SelectTrigger>
                        <SelectContent className="bg-zinc-900 border-zinc-800">
                          {sessionOptions.map((opt) => (
                            <SelectItem
                              key={opt.value}
                              value={opt.value}
                              className="text-zinc-300 focus:bg-lime-400/10 focus:text-lime-400"
                            >
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Step2: Generating placeholder */}
          <div className="mt-4 p-6 rounded-lg bg-zinc-900/50 border border-zinc-800/50 text-center opacity-30">
            <p className="text-zinc-500 text-sm">
              Step 2: Generating your plan...
            </p>
          </div>
        </div>
      </div>
    </SignedIn>
  );
};

export default OnBoarding;
