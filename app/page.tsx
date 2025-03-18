import  Button from "@/app/components/Button";
import Card from "@/app/components/Card";
import Form from "@/app/components/Form";
import Navbar from "@/app/components/Navbar";
import Map from "@/app/components/Map";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-4 p-8">
      <h1 className="text-3xl font-bold">Welcome to Vehicle Assist 🚗</h1>
      <Button 
        type="button" 
        title="Find Nearby Mechanics" 
        variant="btn_dark_green" 
      />
      <Card title="Best Mechanic" description="Expert roadside assistance" />
      <Form />
    </div>
  );
}
