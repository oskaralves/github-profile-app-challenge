'use client';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { SearchIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchProfile() {
  const [search, setSearch] = useState('');
  const router = useRouter();

  const handleSearch = () => {
    if (search.trim() === '') return;
    router.push(`?username=${encodeURIComponent(search.trim())}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center space-x-2">
      <Input
        placeholder="Enter username..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Button type="submit" variant="default" size="md">
        <SearchIcon className="-ml-1 -mr-1 h-5 w-5" />
      </Button>
    </form>
  );
}
