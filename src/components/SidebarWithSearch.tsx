import React, { useCallback, useEffect, useState } from "react";
import { Card, Typography, List, ListItem, ListItemPrefix, Checkbox, Input } from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

type FilterTypes = {
  Acessorio: boolean;
  Camiseta: boolean;
  Calcao: boolean;
  Regata: boolean;
};

const SidebarWithSearch: React.FC<{ onSearch: (term: string, filter: keyof FilterTypes) => void }> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState<FilterTypes>({
    Acessorio: false,
    Camiseta: false,
    Calcao: false,
    Regata: false,
  });

  const [prevSearchTerm, setPrevSearchTerm] = useState("");
  const [prevFilters, setPrevFilters] = useState<FilterTypes>({ ...filters });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearchTerm(e.target.value);
    },
    []
  );

  const handleCheckboxChange = useCallback(
    (filter: keyof FilterTypes) => {
      setFilters((prevFilters) => ({ ...prevFilters, [filter]: !prevFilters[filter] }));
    },
    []
  );

  useEffect(() => {
    if (searchTerm !== prevSearchTerm || filters !== prevFilters) {
      const activeFilterKey = (Object.keys(filters) as Array<keyof FilterTypes>).find((key) => filters[key]) as keyof FilterTypes | undefined;
      const activeFilter = activeFilterKey || ("Acessorio" as keyof FilterTypes);
      onSearch(searchTerm, activeFilter);
      setPrevSearchTerm(searchTerm);
      setPrevFilters(filters);
    }
  }, [searchTerm, filters, onSearch]);

  return (
    <Card className="h-[calc(100vh-2rem)] w-full max-w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-2 flex items-center gap-4 p-4">
        <Typography variant="h5" color="blue-gray">
          Filtro
        </Typography>
      </div>
      <div className="p-2">
        <Input
          icon={<MagnifyingGlassIcon className="h-5 w-5" />}
          label="Search"
          crossOrigin={undefined}
          onChange={handleInputChange}
          value={searchTerm}
        />
      </div>
      <List>
        {Object.keys(filters).map((filterKey) => {
          const filter = filterKey as keyof FilterTypes;
          return (
            <ListItem key={filter} className="p-0">
              <label
                htmlFor={`checkbox-${filter.toLowerCase()}`}
                className="flex w-full cursor-pointer items-center px-3 py-2"
              >
                <ListItemPrefix>
                  <Checkbox
                    id={`checkbox-${filter.toLowerCase()}`}
                    checked={filters[filter]}
                    onChange={() => handleCheckboxChange(filter)}
                    crossOrigin="anonymous"
                  />
                </ListItemPrefix>
                <Typography color="blue-gray" className="font-medium">
                  {filter}
                </Typography>
              </label>
            </ListItem>
          );
        })}
      </List>
    </Card>
  );
};

export default SidebarWithSearch;
