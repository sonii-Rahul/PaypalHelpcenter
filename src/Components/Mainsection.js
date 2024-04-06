import React, { useState } from 'react';

function HelpCenter() {
    const [searchInput, setSearchInput] = useState('');
    const [filterOption, setFilterOption] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    // Sample documents
    const documents = [
        { id: 1, title: 'Document 1', type: 'Help Article', description: 'Description for Document 1' },
  { id: 2, title: 'Document 2', type: 'Technical Support Article', description: 'Description for Document 2' },
  { id: 3, title: 'Document 3', type: 'Business Resources', description: 'Description for Document 3' },
  { id: 4, title: 'Document 4', type: 'Developer Resources', description: 'Description for Document 4' },
  { id: 5, title: 'Document 5', type: 'PayPal Product Information', description: 'Description for Document 5' },
  { id: 6, title: 'Document 6', type: 'Community Post', description: 'Description for Document 6' },
  { id: 7, title: 'Document 7', type: 'Help Article', description: 'Description for Document 7' },
  { id: 8, title: 'Document 8', type: 'Technical Support Article', description: 'Description for Document 8' },
  { id: 9, title: 'Document 9', type: 'Business Resources', description: 'Description for Document 9' },
  { id: 10, title: 'Document 10', type: 'Developer Resources', description: 'Description for Document 10' },
  { id: 11, title: 'Document 11', type: 'PayPal Product Information', description: 'Description for Document 11' },
  { id: 12, title: 'Document 12', type: 'Community Post', description: 'Description for Document 12' },
  { id: 13, title: 'Document 13', type: 'Help Article', description: 'Description for Document 13' },
  { id: 14, title: 'Document 14', type: 'Technical Support Article', description: 'Description for Document 14' },
  { id: 15, title: 'Document 15', type: 'Business Resources', description: 'Description for Document 15' },
  { id: 16, title: 'Document 16', type: 'Developer Resources', description: 'Description for Document 16' },
  { id: 17, title: 'Document 17', type: 'PayPal Product Information', description: 'Description for Document 17' },
  { id: 18, title: 'Document 18', type: 'Community Post', description: 'Description for Document 18' },
  { id: 19, title: 'Document 19', type: 'Help Article', description: 'Description for Document 19' },
  { id: 20, title: 'Document 20', type: 'Technical Support Article', description: 'Description for Document 20' }
        
    
    ];

    // Function to handle search input change
    const handleSearchInputChange = (event) => {
        setSearchInput(event.target.value.substring(0, 60)); // Limiting input to 60 characters
    };

    // Function to handle radio button change
    const handleFilterOptionChange = (event) => {
        setFilterOption(event.target.value);
    };

    // Function to handle search button click
    const handleSearchButtonClick = () => {
        // Filter documents based on search input and filter option
        const filteredDocuments = documents.filter(document =>
            document.title.toLowerCase().includes(searchInput.toLowerCase()) &&
            (filterOption === '' || document.type === filterOption)
        );
        setSearchResults(filteredDocuments);
        setCurrentPage(1); // Reset current page to 1 when new search is performed
    };

    // Pagination logic
    const documentsPerPage = 7;
    const indexOfLastDocument = currentPage * documentsPerPage;
    const indexOfFirstDocument = indexOfLastDocument - documentsPerPage;
    const currentDocuments = searchResults.slice(indexOfFirstDocument, indexOfLastDocument);

    // Function to handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
           <div className='m-4'> 
            <h1 className='text-blue-800 m-2 md:mx-32'>Help Center</h1>
            <div>
                <span className='flex justify-center text-xl m-2 my-4'>
                    How can we help?
                </span>
                <div className="mb-4 flex justify-center">
                    <input
                        type="text"
                        value={searchInput}
                        onChange={handleSearchInputChange}
                        placeholder="Search..."
                        className="border border-gray-400 px-4 py-2 mr-2 rounded-full w-2/5 sm:full"
                    />
                    <button
                        onClick={handleSearchButtonClick}
                        className="bg-blue-500 hover:bg-blue-800 text-white font-semibold px-4 py-2 rounded"
                    >
                        Search
                    </button>
                </div>

                <div className="flex flex-col items-center">
                    <div className="md:flex m-8 w-full">
                        {/* Radio Button Options */}
                        <div className='shrink'>
                        <div className="w-60 border h-80 p-4  m-4 md:ml-32 ml-12">
                            <h1 className="m-2 font-bold">Document Type</h1>
                            <div className="flex flex-col items-start py-2">
                                {['Help Article', 'Technical Support Article', 'Business Resources', 'Developer Resources', 'PayPal Product Information', 'Community Post'].map(option => (
                                    <label key={option} className="inline-flex items-center text-black font-light text-sm py-2" htmlFor={option}>
                                        <input
                                            type="radio"
                                            id={option}
                                            className="form-radio h-5 w-5 text-blue-800"
                                            value={option}
                                            checked={filterOption === option}
                                            onChange={handleFilterOptionChange}
                                        />
                                        <span className="ml-2">{option}</span>
                                    </label>
                                ))}
                            </div>
                        </div>
                        </div>

                        <div className="flex-grow justify-center m-12 ">
                            {/* Display number of documents found */}
                            <div className="mb-2 p-4">
                                <p>Search result</p>
                                <p className="text-sm">{searchResults.length} for "{searchInput}"</p>
                            </div>

                            {/* Search Results */}
                            <div className=" sm:w-full flex-grow overflow-hidden py-4">
                                <ul>
                                    {currentDocuments.map(result => (
                                        <li key={result.id} className="rounded p-2 mb-2">
                                            <p className="font-semibold text-sky-600">{result.title} - {result.type}</p>
                                            <p>{result.description}</p>
                                        </li>
                                    ))}
                                </ul>
                                {/* Pagination */}
                                <ul className="flex justify-center">
                                    {Array.from({ length: Math.ceil(searchResults.length / documentsPerPage) }, (_, i) => (
                                        <li key={i} className="mx-1">
                                            <button
                                                className={`px-3 py-1 m-2 rounded ${currentPage === i + 1 ? 'bg-blue-800 text-white' : 'bg-gray-300'}`}
                                                onClick={() => paginate(i + 1)}
                                            >
                                                {i + 1}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            </div>
        </>
    );
}

export default HelpCenter;
