"use client"
import React, {FormEvent, useState} from 'react'
import {scrapeAndStoreProduct} from "@/lib/actions";

const isValidAmazonProductURL = (url: string) => {
    try {
        const parsedUrl = new URL(url);
        const hostname = parsedUrl.hostname;
        if (hostname.includes('amazon.com') || hostname.includes('amazon.') || hostname.endsWith('amazon')) {
            return true;
        }
    } catch (error) {
        console.error(error);
    }
    return false;
}

const Searchbar = () => {
    const [searchPrompt, setSearchPrompt] = useState('')
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const isValidLink = isValidAmazonProductURL(searchPrompt);
        if (!isValidLink)   return alert('Invalid Amazon Product URL');

        try {
            setIsLoading(true);
            const product = await scrapeAndStoreProduct(searchPrompt);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <>
            <form className="flex flex-wrap gap-4 mt-12" onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={searchPrompt}
                    onChange={(e) => setSearchPrompt(e.target.value)}
                    placeholder="Enter product link"
                    className="searchbar-input"/>
                <button
                    type="submit"
                    className="searchbar-btn"
                    disabled={searchPrompt === '' || isLoading}
                >

                    {isLoading ? 'Searching...' : 'Search'}
                </button>
            </form>
        </>
    )
}
export default Searchbar
