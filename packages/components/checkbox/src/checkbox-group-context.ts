import { ContextType } from "./use-checkbox-group";
import { createContext } from "../../../hooks/context";

export const [CheckboxGroupProvider, useCheckboxGroupContext] = createContext<ContextType>({
  name: "CheckboxGroupContext",
  strict: false,
});
