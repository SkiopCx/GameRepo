import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import useGameQueryStore from "../services/GameQueryStore";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const ref = useRef<HTMLInputElement>(null);

  const setSearchText = useGameQueryStore((s) => s.setSearchText);

  const navigator = useNavigate();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) {
          setSearchText(ref.current.value);
          navigator("/");
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />}></InputLeftElement>
        <Input
          ref={ref}
          borderRadius={20}
          placeholder="Search game"
          variant="filled"
        ></Input>
      </InputGroup>
    </form>
  );
};

export default SearchInput;
