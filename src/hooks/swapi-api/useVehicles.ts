import { useEffect, useState } from "react"
import { Vehicles, ErrorState } from "../../models";
import { getAllVehicles } from "../../services";

export type VehiclesState = Vehicles[] | [];

export const useVehicles = () => {
  const [vehicles, setVehicles] = useState<VehiclesState>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState<ErrorState>(null);

  useEffect(() => {
    const loadVehicles = async () => {
      try {
        setIsLoading(true);
        const data = await getAllVehicles();
        setVehicles(data);
      } catch (err: unknown) {
        setHasError(err);
      } finally {
        setIsLoading(false);
      }
    };

    loadVehicles();
  }, []);

  return { vehicles, isLoading, hasError };
}