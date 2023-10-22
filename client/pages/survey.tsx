import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Radio,
  Button,
  Input,
  Stack,
  Text,
  RadioGroup,
} from "@chakra-ui/react";
import { Select } from "@chakra-ui/react";

const Survey: React.FC = () => {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    age: "",
    gender: "",
    income: "",
    city: "",
    diet: "",
    waste: "",
    transport: "",
    shopping: "",
    clothes: "",
    // Add fields for other steps here
  });

  const handleNextStep = () => {
    if (step < 8) {
      setStep(step + 1);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleSubmit = () => {
    // You can now access formData to display or submit the collected data
    console.log("Collected Data:", formData);
    router.push("/home");
  };

  const handlePrevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <div className="p-20">
      {step === 1 && (
        <Stack spacing={4}>
          <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
            Survey
          </h1>
          <p className="text-center">
            Take a quick survey to help us understand you better!
          </p>
          <Button
            onClick={handleNextStep}
            bg="#024636"
            _hover={{
              bg: "#024636",
              color: "white",
            }}
            color="white"
          >
            Next
          </Button>
        </Stack>
      )}
      {step === 2 && (
        <Stack spacing={4}>
          <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
            Basic Info
          </h1>

          <div className="flex">
            <p className="mr-3">Date of Birth</p>
            <Input
              placeholder="Select Date and Time"
              size="md"
              type="datetime-local"
              onChange={(e) => handleInputChange("age", e.target.value)}
              value={formData.age}
            />
          </div>
          <div className="flex">
            <p className="mr-10">Gender</p>
            <Select
              placeholder="Select Gender"
              onChange={(e) => handleInputChange("gender", e.target.value)}
              value={formData.gender}
            >
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </Select>
          </div>

          <div className="flex">
            <p className="mr-10">Income</p>
            <Select
              placeholder="Select option"
              onChange={(e) => handleInputChange("income", e.target.value)}
              value={formData.income}
            >
              <option value="30,000-50,000">30,000-50,000</option>
              <option value="50,000-100,000">50,000-100,000</option>
              <option value="more than 100,000">more than 100,000</option>
            </Select>
          </div>
          <div className="flex">
            <p className="mr-16">City</p>
            <Input
              placeholder="Question 2"
              onChange={(e) => handleInputChange("city", e.target.value)}
              value={formData.city}
            />
          </div>

          <Button
            onClick={handleNextStep}
            bg="#024636"
            _hover={{
              bg: "#024636",
              color: "white",
            }}
            color="white"
          >
            Next
          </Button>
        </Stack>
      )}

      {step === 3 && (
        <Stack spacing={4}>
          <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
            Diet
          </h1>
          <p>What type of diet do you follow?</p>
          <RadioGroup
            onChange={(value) => handleInputChange("diet", value)}
          >
            <Stack>
              <Radio value="vegan">Vegan</Radio>
              <Radio value="omnivore">Omnivore</Radio>
              <Radio value="carnivore">Carnivore</Radio>
              <Radio value="keto">Keto</Radio>
              <Radio value="vegetarian">Vegetarian</Radio>
            </Stack>
          </RadioGroup>
          <Button onClick={handlePrevStep}>Previous</Button>
          <Button
            onClick={handleNextStep}
            bg="#024636"
            _hover={{
              bg: "#024636",
              color: "white",
            }}
            color="white"
          >
            Next
          </Button>
        </Stack>
      )}

      {step === 4 && (
        <Stack spacing={4}>
          <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
            waste
          </h1>
          <p>What waste sorting do you do?</p>
          <RadioGroup
            onChange={(value) => handleInputChange("waste", value)}
          >
            <Stack>
              <Radio value="glass">Glass</Radio>
              <Radio value="ewaste">E-waste</Radio>
              <Radio value="metal">Metal</Radio>
              <Radio value="paper">Paper</Radio>
              <Radio value="plastic">Plastic</Radio>
              <Radio value="organic">Organic</Radio>
              <Radio value="none">None</Radio>
            </Stack>
          </RadioGroup>
          <Button onClick={handlePrevStep}>Previous</Button>
          <Button
            onClick={handleNextStep}
            bg="#024636"
            _hover={{
              bg: "#024636",
              color: "white",
            }}
            color="white"
          >
            Next
          </Button>
        </Stack>
      )}

      {step === 5 && (
        <Stack spacing={4}>
          <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
            Transportation
          </h1>
          <p>What mode of transportation do you use?</p>
          <RadioGroup
            onChange={(value) => handleInputChange("transport", value)}
          >
            <Stack>
              <Radio value="car">Car</Radio>
              <Radio value="carpool">Carpool</Radio>
              <Radio value="bike">Bike / E-bike</Radio>
              <Radio value="walking">Walking</Radio>
              <Radio value="publictransit">Public Transit</Radio>
            </Stack>
          </RadioGroup>
          <Button onClick={handlePrevStep}>Previous</Button>

          <Button
            onClick={handleNextStep}
            bg="#024636"
            _hover={{
              bg: "#024636",
              color: "white",
            }}
            color="white"
          >
            Next
          </Button>
        </Stack>
      )}

      {step === 6 && (
        <Stack spacing={4}>
          <h1 className="text-4xl font-bold mb-8 text-[#024636] mt-8 uppercase text-center">
            shopping habits
          </h1>
          <p>Where do you usually shop for your day-to-day needs?</p>
          <Select
            placeholder="Select option"
            onChange={(e) => handleInputChange("shopping", e.target.value)}
            value={formData.shopping}
          >
            <option value="local">Local Grocery Store</option>
            <option value="supermarket">Supermarket Chain</option>
            <option value="onlineretail">
              Online Retailers (e.g., Amazon, Walmart.com)
            </option>
          </Select>

          <p>How many clothing items do you typically buy in a year?</p>
          <Select
            placeholder="Select option"
            onChange={(e) => handleInputChange("clothes", e.target.value)}
            value={formData.clothes}
          >
            <option value="option1">1-10 items</option>
            <option value="option2">10-50</option>
            <option value="option3">more than 50</option>
          </Select>

          <Button onClick={handlePrevStep}>Previous</Button>
          <Button
            onClick={handleSubmit}
            bg="#024636"
            _hover={{
              bg: "#024636",
              color: "white",
            }}
            color="white"
          >
            Submit
          </Button>
        </Stack>
      )}
    </div>
  );
};

export default Survey;
