import React, { useState, useEffect } from "react";
import { ScrollView, View, Text, FlatList, TouchableOpacity } from "react-native";
import { initializeApp } from "firebase/app";
import { getFirestore, getDocs, collection, query, where } from "firebase/firestore";
import { styles } from "./style";



export const TrainingsStackScreen = () => {

    type TrainingDataType = {
        id: string,
        Category: string,
        Exercise: string
    }

    const firebaseConfig = {
        apiKey: "AIzaSyD0nqBtThNyT-p2mXbbtHweJLaQi4eALA0",
        authDomain: "firstfirebaseproject-530da.firebaseapp.com",
        databaseURL: "https://firstfirebaseproject-530da-default-rtdb.firebaseio.com",
        projectId: "firstfirebaseproject-530da",
        storageBucket: "firstfirebaseproject-530da.appspot.com",
        messagingSenderId: "136560842203",
        appId: "1:136560842203:web:9646f1c6cb5547caee83fe"
    };

    const app = initializeApp(firebaseConfig);
    const db = getFirestore();

    const [training, setTraining] = useState<TrainingDataType[]>([]);
    const [chests, setChests] = useState<TrainingDataType[]>([]);
    const [backs, setBacks] = useState<TrainingDataType[]>([]);
    const [shoulders, setShoulders] = useState<TrainingDataType[]>([]);
    const [trapeze, setTrapeze] = useState<TrainingDataType[]>([]);
    const [triceps, setTriceps] = useState<TrainingDataType[]>([]);
    const [biceps, setBiceps] = useState<TrainingDataType[]>([]);
    const [forearm, setForearm] = useState<TrainingDataType[]>([]);
    const [glute, setGlute] = useState<TrainingDataType[]>([]);
    const [quadriceps, setQuadriceps] = useState<TrainingDataType[]>([]);
    const [posterior, setPosterior] = useState<TrainingDataType[]>([]);
    const [calf, setCalf] = useState<TrainingDataType[]>([]);
    const [abs, setAbs] = useState<TrainingDataType[]>([]);

    const pickInfosDb = async () => {
        const q = query(collection(db, 'Training'));
        const querySnapshot = await getDocs(q);
        const data: TrainingDataType[] = [];
        querySnapshot.forEach((doc) => {
            const academyData = doc.data() ;
            data.push({
                id: doc.id,
                Category: academyData.Category,
                Exercise: academyData.Exercise
            });
        });
        setTraining(data);
    }

    useEffect(() => {
        pickInfosDb();
    }, []);

    const renderItem = ({ item }: { item: TrainingDataType }) => (
        <View>
            <Text >Musculo: {item.Category}</Text>
            <Text >Exercícios: {item.Exercise}</Text>
        </View>
    );

    const chestTraining = async () => {
        const trainingRef = collection(db, 'Training');

        const chest = query(trainingRef, where('Category', '==', 'Peitoral'))

        const querySnapshot = await getDocs(chest);
        const data: TrainingDataType[] = [];
        querySnapshot.forEach((doc) => {

            const chestData = doc.data();
            data.push({
                id: doc.id,
                Category: chestData.Category,
                Exercise: chestData.Exercise
            });
            
        
        })
        setChests(data);
    }

    useEffect(() => {
        chestTraining();
    }, []);

        const renderChests = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const[showChestTraining, setShowChestTraining] = useState(false);
        const handleShowChests = () => {
        if(showChestTraining == false){ 
            setShowChestTraining(true);
            if(showBacksTraining  || showShouldersTraining || showTrapezeTrainings || showTricepsTraining
                || showBicepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining
                || showPosteriorTraining || showCalfTraining || showAbsTraining == true
            ){
                setShowBacksTraining(false);
                setShowShoulderTraining(false);
                setShowTrapezeTrainings(false);
                setShowTricepsTraining(false);
                setShowBicepsTraining(false);
                setShowForearmTraining(false);
                setShowGluteTraining(false);
                setShowQuadricepsTraining(false);
                setShowPosteriorTraining(false);
                setShowCalfTraining(false);
                setShowAbsTraining(false);
            }
        } else if (showChestTraining == true){
            setShowChestTraining(false);
            
        }
    }

       const backTraining =async () => {
        const trainingRef = collection(db, 'Training');

        const back = query(trainingRef, where('Category', '==', 'Costas'))

        const querySnapshot = await getDocs(back);
        const data: TrainingDataType[] = [];
        querySnapshot.forEach((doc) => {

            const backData = doc.data();
            data.push({
                id: doc.id,
                Category: backData.Category,
                Exercise: backData.Exercise
            });
        
        })
        setBacks(data);
       }

       useEffect(() => {
        backTraining();
       }, [])

       const renderBacks = ({ item }: { item: TrainingDataType }) => (
        <View>
            <Text > {item.Exercise}</Text>
        </View>
    );

       const [showBacksTraining, setShowBacksTraining] = useState(false);
       const handleShowBacks = () => {
            if(showBacksTraining == false ){
                setShowBacksTraining(true);
                if(showChestTraining || showShouldersTraining || showTrapezeTrainings || showTricepsTraining 
                    || showBicepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                    || showPosteriorTraining || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            }else if (showBacksTraining ==true){
                setShowBacksTraining(false);
            
            }
       }
      
       const shoulderTraining = async () => {
        const trainingRef = collection(db, 'Training');

        const shoulders = query(trainingRef, where('Category', '==', 'Ombro'))

        const querySnapshot = await getDocs(shoulders);
        const data: TrainingDataType[] = [];
        querySnapshot.forEach((doc) => {

            const shouldersData = doc.data();
            data.push({
                id: doc.id,
                Category: shouldersData.Category,
                Exercise: shouldersData.Exercise
            });
            
        
        })
        setShoulders(data);
    }

    useEffect(() => {
        shoulderTraining();
    }, []);

    const renderShoulders = ({ item }: { item: TrainingDataType }) => (
        <View>
            <Text > {item.Exercise}</Text>
        </View>
    );

    const [showShouldersTraining, setShowShoulderTraining] = useState(false);
    const handleShowShoulders = () => {
        if(showShouldersTraining == false){
            setShowShoulderTraining(true);
            if(showBacksTraining  || showChestTraining  || showTrapezeTrainings || showTricepsTraining 
                || showBicepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                || showPosteriorTraining || showCalfTraining || showAbsTraining == true
            ){
                setShowBacksTraining(false);
                setShowChestTraining(false);
                setShowTrapezeTrainings(false);
                setShowTricepsTraining(false);
                setShowBicepsTraining(false);
                setShowForearmTraining(false);
                setShowGluteTraining(false);
                setShowQuadricepsTraining(false);
                setShowPosteriorTraining(false);
                setShowCalfTraining(false);
                setShowAbsTraining(false);
            }
        } else if(showShouldersTraining == true){
            setShowShoulderTraining(false);
        }
    } 

    const trapezeTraining = async () => {
        const trainingRef = collection(db, 'Training');

        const trapeze = query(trainingRef, where('Category', '==', 'Trapézio'))

        const querySnapshot = await getDocs(trapeze);
        const data: TrainingDataType[] = [];
        querySnapshot.forEach((doc) => {

            const trapezeData = doc.data();
            data.push({
                id: doc.id,
                Category: trapezeData.Category,
                Exercise: trapezeData.Exercise
            });
            
        
        })
        setTrapeze(data);
    }

    useEffect(() => {
        trapezeTraining();
    }, []);

    const renderTrapeze = ({ item }: { item: TrainingDataType }) => (
        <View>
            <Text > {item.Exercise}</Text>
        </View>
    );

    const [showTrapezeTrainings, setShowTrapezeTrainings] = useState(false);
    const handleShowTrapezes = () => {
        if(showTrapezeTrainings == false){
            setShowTrapezeTrainings(true);
            if(showChestTraining  || showBacksTraining || showShouldersTraining || showTricepsTraining 
                || showBicepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                || showPosteriorTraining || showCalfTraining || showAbsTraining == true
            ){
                setShowChestTraining(false);
                setShowBacksTraining(false);
                setShowShoulderTraining(false);
                setShowTricepsTraining(false);
                setShowBicepsTraining(false);
                setShowForearmTraining(false);
                setShowGluteTraining(false);
                setShowQuadricepsTraining(false);
                setShowPosteriorTraining(false);
                setShowCalfTraining(false);
                setShowAbsTraining(false);
            }
        } else if(showTrapezeTrainings == true){
            setShowTrapezeTrainings(false);
        }
    }


    const tricepsTraining = async () => {
        const trainingRef = collection(db, 'Training');

        const triceps = query(trainingRef, where('Category', '==', 'Tríceps'))

        const querySnapshot = await getDocs(triceps);
        const data: TrainingDataType[] = [];
        querySnapshot.forEach((doc) => {

            const tricepsData = doc.data();
            data.push({
                id: doc.id,
                Category: tricepsData.Category,
                Exercise: tricepsData.Exercise
            });
            
        
        })
        setTriceps(data);
    }

        useEffect(() => {
            tricepsTraining();
        }, [])

        const renderTriceps = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showTricepsTraining, setShowTricepsTraining] = useState(false);
        const handleShowTriceps = () => {
            if(showTricepsTraining == false){
                setShowTricepsTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings 
                    || showBicepsTraining || showForearmTraining || showGluteTraining ||showQuadricepsTraining
                    || showPosteriorTraining || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            } else if(showTricepsTraining == true){
                setShowTricepsTraining(false);
            }
        }
    

        const bicepsTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const biceps = query(trainingRef, where('Category', '==', 'Bíceps'))
    
            const querySnapshot = await getDocs(biceps);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const bicepsData = doc.data();
                data.push({
                    id: doc.id,
                    Category: bicepsData.Category,
                    Exercise: bicepsData.Exercise
                });
                
            
            })
            setBiceps(data);
        }

        useEffect(() => {
            bicepsTraining();
        }, [])

        const renderBiceps = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showBicepsTraining, setShowBicepsTraining] = useState(false);
        const handleShowBiceps = () => {
            if(showBicepsTraining == false){
                setShowBicepsTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings
                    || showTricepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                    || showPosteriorTraining || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            } else if(showBicepsTraining == true){
                setShowBicepsTraining(false);
            }
        }

        const forearmTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const forearm = query(trainingRef, where('Category', '==', 'Antebraço'))
    
            const querySnapshot = await getDocs(forearm);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const forearmData = doc.data();
                data.push({
                    id: doc.id,
                    Category: forearmData.Category,
                    Exercise: forearmData.Exercise
                });
                
            
            })
            setForearm(data);
        }

        useEffect(() => {
            forearmTraining();
        }, []);

        const renderForearm = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showForearmTraining, setShowForearmTraining] = useState(false);
        const handleShowForearms = () => {
            if(showForearmTraining == false){
                setShowForearmTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings|| showTricepsTraining
                    || showBicepsTraining || showGluteTraining || showQuadricepsTraining || showPosteriorTraining 
                    || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            }
        }


        const gluteTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const glute = query(trainingRef, where('Category', '==', 'Glúteo'))
    
            const querySnapshot = await getDocs(glute);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const gluteData = doc.data();
                data.push({
                    id: doc.id,
                    Category: gluteData.Category,
                    Exercise: gluteData.Exercise
                });
                
            
            })
            setGlute(data);
        }

        useEffect(() => {
            gluteTraining();
        }, [])

        const renderGlute = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const[showGluteTraining, setShowGluteTraining] = useState(false);
        const handleShowGlute = () => {
            if(showGluteTraining == false){
                setShowGluteTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings || showTricepsTraining
                    || showBicepsTraining || showForearmTraining || showQuadricepsTraining || showPosteriorTraining 
                    || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            } else if( showGluteTraining == true){
                setShowGluteTraining(false);
            }
        }

        const quadricepsTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const quadriceps = query(trainingRef, where('Category', '==', 'Quadríceps'))
    
            const querySnapshot = await getDocs(quadriceps);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const quadricepsData = doc.data();
                data.push({
                    id: doc.id,
                    Category: quadricepsData.Category,
                    Exercise: quadricepsData.Exercise
                });
                
            
            })
            setQuadriceps(data);
        }

        useEffect(() => {
            quadricepsTraining();
        }, []);

        const renderQuadriceps = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showQuadricepsTraining, setShowQuadricepsTraining] = useState(false);
        const handleShowQuadriceps = () => {
            if(showQuadricepsTraining == false){
                setShowQuadricepsTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings || showTricepsTraining
                    || showBicepsTraining || showForearmTraining || showGluteTraining || showPosteriorTraining 
                    || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            } else if(showQuadricepsTraining == true){
                setShowQuadricepsTraining(false);
            }
        }


        const posteriorTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const posterior = query(trainingRef, where('Category', '==', 'Posterior'))
    
            const querySnapshot = await getDocs(posterior);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const posteriorData = doc.data();
                data.push({
                    id: doc.id,
                    Category: posteriorData.Category,
                    Exercise: posteriorData.Exercise
                });
                
            
            })
            setPosterior(data);
        }

        useEffect(() => {
            posteriorTraining();
        }, [])

        const renderPosterior = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showPosteriorTraining, setShowPosteriorTraining] = useState(false);
        const handleShowPosterior = () => {
            if(showPosteriorTraining == false){
                setShowPosteriorTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings || showBicepsTraining
                    || showTricepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                    || showCalfTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowCalfTraining(false);
                    setShowAbsTraining(false);
                }
            } else if(showPosteriorTraining == true){
                setShowPosteriorTraining(false);
            }
        }

        const calfTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const calf = query(trainingRef, where('Category', '==', 'Panturrilha'))
    
            const querySnapshot = await getDocs(calf);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const calfData = doc.data();
                data.push({
                    id: doc.id,
                    Category: calfData.Category,
                    Exercise: calfData.Exercise
                });
                
            
            })
            setCalf(data);
        }

        useEffect(() => {
            calfTraining();
        }, [])

        const renderCalf = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showCalfTraining, setShowCalfTraining] = useState(false);
        const handleShowCalfs = () => {
            if(showCalfTraining == false){
                setShowCalfTraining(true);
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings || showTricepsTraining
                    || showBicepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                    || showPosteriorTraining || showAbsTraining == true
                ){
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowAbsTraining(false);
                }
            } else if(showCalfTraining == true){
                setShowCalfTraining(false);
            }
        }


        const absTraining = async () => {
            const trainingRef = collection(db, 'Training');
    
            const abs = query(trainingRef, where('Category', '==', 'Abdômem'))
    
            const querySnapshot = await getDocs(abs);
            const data: TrainingDataType[] = [];
            querySnapshot.forEach((doc) => {
    
                const absData = doc.data();
                data.push({
                    id: doc.id,
                    Category: absData.Category,
                    Exercise: absData.Exercise
                });
                
            
            })
            setAbs(data);
        }

        useEffect(() => {
            absTraining()
        }, []);

        const renderAbs = ({ item }: { item: TrainingDataType }) => (
            <View>
                <Text > {item.Exercise}</Text>
            </View>
        );

        const [showAbsTraining, setShowAbsTraining] = useState(false);
        const handleShowAbs = () => {
            if (showAbsTraining == false){
                setShowAbsTraining(true)
                if(showChestTraining || showBacksTraining || showShouldersTraining || showTrapezeTrainings || showTricepsTraining
                    || showBicepsTraining || showForearmTraining || showGluteTraining || showQuadricepsTraining 
                    || showPosteriorTraining || showCalfTraining == true
                ) {
                    setShowChestTraining(false);
                    setShowBacksTraining(false);
                    setShowShoulderTraining(false);
                    setShowTrapezeTrainings(false);
                    setShowTricepsTraining(false);
                    setShowBicepsTraining(false);
                    setShowForearmTraining(false);
                    setShowGluteTraining(false);
                    setShowQuadricepsTraining(false);
                    setShowPosteriorTraining(false);
                    setShowCalfTraining(false);           
                }
            } else if(showAbsTraining == true){
                setShowAbsTraining(false);
            }
        }

    return (
            <View style={styles.container}>
                <ScrollView horizontal={true} style={styles.buttonsArea}>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowChests}><Text style={{color: '#eaeaea'}}>Peitoral</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowBacks}><Text style={{color: '#eaeaea'}}>Costas</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowShoulders}><Text style={{color: '#eaeaea'}}>Ombro</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowTrapezes}><Text style={{color: '#eaeaea'}}>Trapézio</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowTriceps}><Text style={{color: '#eaeaea'}}>Tríceps</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowBiceps}><Text style={{color: '#eaeaea'}}>Bíceps</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowForearms}><Text style={{color: '#eaeaea'}}>Antebraço</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowGlute}><Text style={{color: '#eaeaea'}}>Glúteo</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowQuadriceps}><Text style={{color: '#eaeaea'}}>Quadríceps</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowPosterior}><Text style={{color: '#eaeaea'}}>Posterior</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowCalfs}><Text style={{color: '#eaeaea'}}>Panturilha</Text></TouchableOpacity>
                    <TouchableOpacity style={styles.buttons} onPress={handleShowAbs}><Text style={{color: '#eaeaea'}}>Abdomêm</Text></TouchableOpacity>
                </ScrollView>
                    
                     {showChestTraining && showChestTraining == true && 
                            <FlatList 
                            data={chests}
                            keyExtractor={item => item.id}
                            renderItem={renderChests}
                        />
                     }

                     {showBacksTraining && showBacksTraining == true && 
                        <FlatList 
                            data={backs}
                            keyExtractor={item => item.id}
                            renderItem={renderBacks}

                        />
                     }

                     {showShouldersTraining && showShouldersTraining == true &&
                        <FlatList 
                            data={shoulders}
                            keyExtractor={item => item.id}
                            renderItem={renderShoulders}
                        />
                     }

                     {showTrapezeTrainings && showTrapezeTrainings == true &&
                        <FlatList 
                            data={trapeze}
                            keyExtractor={item => item.id}
                            renderItem={renderTrapeze}
                        />
                     }

                     {showTricepsTraining && showTricepsTraining == true &&
                        <FlatList 
                            data={triceps}
                            keyExtractor={item => item.id}
                            renderItem={renderTriceps}
                        />
                     }

                     {showBicepsTraining && showBicepsTraining == true && 
                        <FlatList 
                            data={biceps}
                            keyExtractor={item => item.id}
                            renderItem={renderBiceps}
                        />
                     }

                     {showForearmTraining && showForearmTraining == true && 
                        <FlatList 
                            data={forearm}
                            keyExtractor={item => item.id}
                            renderItem={renderForearm}
                        />
                     }

                     {showGluteTraining && showGluteTraining == true && 
                        <FlatList 
                            data={glute}
                            keyExtractor={item => item.id}
                            renderItem={renderGlute}
                        />
                     }

                     {showQuadricepsTraining && showQuadricepsTraining == true && 
                        <FlatList 
                            data={quadriceps}
                            keyExtractor={item => item.id}
                            renderItem={renderQuadriceps}
                        />
                     }

                     {showPosteriorTraining && showPosteriorTraining == true &&
                        <FlatList 
                            data={posterior}
                            keyExtractor={item => item.id}
                            renderItem={renderPosterior}
                        />
                     }

                     {showCalfTraining && showCalfTraining == true &&
                        <FlatList 
                            data={calf}
                            keyExtractor={item => item.id}
                            renderItem={renderCalf}
                        />
                     }

                     {showAbsTraining && showAbsTraining == true && 
                        <FlatList 
                            data={abs}
                            keyExtractor={item => item.id}
                            renderItem={renderAbs}
                        />
                     }
            </View>
                
    )}