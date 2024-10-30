import React, { useState } from 'react';
import { Link } from "react-router-dom";
import {
    Container,
    Typography,
    TextField,
    Button,
    Box,
    Paper,
    Alert,
} from '@mui/material';

export default function CreateItemPage() {
    const [itemDetails, setItemDetails] = useState({
        name: '',
        aliases: '',
        aliasestwo: '',
        location: '',
        shelf: '',
        amount: '',
    });

    const [errors, setErrors] = useState({
        name: false,
        aliases: false,
        aliasestwo: false,
        location: false,
        shelf: false,
        amount: false,
    });

    const [submitError, setSubmitError] = useState('');

    const handleChange = (event) => {
        const { name, value } = event.target;
        setItemDetails(prevDetails => ({
            ...prevDetails,
            [name]: value,
        }));
        
        setErrors(prevErrors => ({
            ...prevErrors,
            [name]: false,
        }));
    };

    const handleData = async (itemDetails) => {
        try {
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(itemDetails)
            };
            console.log(itemDetails)
            const response = await fetch("/api/items/create", requestOptions);
            const data = await response.json();
            console.log(data);
            return data;
        } catch (error) {
            console.error('Error:', error);
            setSubmitError('Failed to create item. Please try again.');
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        const newErrors = Object.keys(itemDetails).reduce((acc, key) => {
            acc[key] = itemDetails[key] === '';
            return acc;
        }, {});
    
        setErrors(newErrors);
    
        if (Object.values(newErrors).some(error => error)) {
            setSubmitError('Please fill in all required fields');
            return;
        }

        await handleData(itemDetails);
    };

    return (
        <Box
            sx={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="sm">
                <Paper elevation={3} sx={{ p: 4 }}>
                    <Typography variant="h4" component="h1" gutterBottom align="center">
                        Create New Item
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 2 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="name"
                            label="Name"
                            name="name"
                            autoFocus
                            value={itemDetails.name}
                            onChange={handleChange}
                            error={errors.name}
                            helperText={errors.name ? "Name is required" : ""}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="aliases"
                            label="Aliases"
                            name="aliases"
                            value={itemDetails.aliases}
                            onChange={handleChange}
                            error={errors.aliases}
                            helperText={errors.aliases ? "Aliases is required" : ""}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="aliasestwo"
                            label="Aliases Two"
                            name="aliasestwo"
                            value={itemDetails.aliasestwo}
                            onChange={handleChange}
                            error={errors.aliasestwo}
                            helperText={errors.aliasestwo ? "Aliases Two is required" : ""}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="location"
                            label="Location"
                            name="location"
                            value={itemDetails.location}
                            onChange={handleChange}
                            error={errors.location}
                            helperText={errors.location ? "Location is required" : ""}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="shelf"
                            label="Shelf"
                            name="shelf"
                            value={itemDetails.shelf}
                            onChange={handleChange}
                            error={errors.shelf}
                            helperText={errors.shelf ? "Shelf is required" : ""}
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="amount"
                            label="Amount"
                            name="amount"
                            type="number"
                            value={itemDetails.amount}
                            onChange={handleChange}
                            error={errors.amount}
                            helperText={errors.amount ? "Amount is required" : ""}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Create Item
                        </Button>
                    </Box>
                    {submitError && (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {submitError}
                        </Alert>
                    )}
                </Paper>
            </Container>
        </Box>
    );
}