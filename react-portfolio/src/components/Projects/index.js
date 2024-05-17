import { useEffect, useState } from 'react';
import Loader from 'react-loaders';
import AnimatedLetters from '../AnimatedLetters';
import './index.scss';
import PopUp from '../PopUp';
import Hopper from "../../assets/images/hopper.png"
import Hopper1 from "../../assets/images/hopper1.png"
import Hopper2 from "../../assets/images/hopper2.png"
import Hopper3 from "../../assets/images/hopper3.png"
import Hopper4 from "../../assets/images/hopper4.png"
import Hopper5 from "../../assets/images/hopper5.png"
import Hangman from "../../assets/images/hangman.png"
import Box from "../../assets/images/box.png"
import Box1 from "../../assets/images/box1.png"
import Box2 from "../../assets/images/box2.png"
import Box3 from "../../assets/images/box3.png"
import Box4 from "../../assets/images/box4.png"
import Information from "../../assets/images/information.png"
import NQueens from "../../assets/images/nqueens.png"
import Robots from "../../assets/images/robots.png"

const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const [visiblePopUp, setVisiblePopUp] = useState(null);
    
    const projects = [
        {
            title: "Hopper Project",
            description: "The Hopper project involved creating a mechanical hopper activated by a rocket igniter. The challenge was to design a timer mechanism to initiate the hop within a specified time window. The final design utilized a spiral rolling timer, ingeniously built around the hopper's structure. This timer controlled a rolling ball that, upon reaching its destination, connected two wires to trigger the rocket igniter. The successful connection released a tensioned platform, powered by torsion springs, causing the hopper to launch vertically.",
            details: (
                <>
                    <h3>Assignment and Materials</h3>
                    <p>
                        The project's goal was to create a mechanism that would hop between 8 and 60 seconds after activation. The design needed to include a timing mechanism to trigger the hopping action. Students were provided with a kit of materials, but could also use additional resources like adhesives, a rocket igniter, and 3D printing, though these were limited in amount.
                    </p>
                    <p>
                        <strong>Materials included:</strong>
                    </p>
                    <ul>
                        <li>Adhesives</li>
                        <li>Rocket ignitor</li>
                        <li>Limited 3D printing resources</li>
                    </ul>
    
                    <h3>Design Goal and Challenges</h3>
                    <p><strong>Design Goal:</strong> Integrate a rocket igniter into the project.</p>
                    <p><strong>Main Challenge:</strong> Designing an effective timer mechanism that would work within the constraints of the materials and allowed resources.</p>
    
                    <h3>Initial Prototypes</h3>
                    <p><strong>Prototype 1.0:</strong></p>
                    <p>
                        Concept: A ball rolling down a path to connect wires and trigger the rocket igniter.
                        Issue: Exceeded allowed 3D printing volume, necessitating a redesign.
                    </p>
                    <img className= 'detail-image' src={Hopper1} alt="Prototype 1.0" />
    
                    <p><strong>Prototype 2.0:</strong></p>
                    <p>
                        Solution: Discussed with Professor Ridley and decided to use momentum transfer for the hopping mechanism. Implemented a spiral rolling timer that would trigger the igniter.
                    </p>
                    
                    <div className= 'detail2-image'>
                    <img src={Hopper2} alt="Prototype 2.0" />
                    <img src={Hopper3} alt="Prototype 2.0" />
                    </div>

                    <p><strong>Hopping Mechanism:</strong></p>
                    <p>
                        Torsion springs held down by a fishing line. When the rocket igniter was triggered, it would cut the fishing line, releasing the springs and launching the hopper.
                    </p>
    
                    <h3>Final Design</h3>
                    <p><strong>Prototype 2.1 - Final Design:</strong></p>
                    <p>
                        Spiral Rolling Timer: The ball rolls down a spiral path, eventually connecting wires to trigger the rocket igniter.
                        Activation: The igniter cuts the line, releasing the tied-down weight, and the energy stored in the rubber band propels the hopper upwards.
                        Materials Used: Wood glue to assemble the parts.
                    </p>
                    <img className= 'detail-image' src={Hopper4} alt="Final Design" />
                    <p><strong>How It Works:</strong></p>
                    <ol>
                        <li>The ball rolls down the spiral timer.</li>
                        <li>The ball connects wires to trigger the rocket igniter.</li>
                        <li>The igniter breaks the fishing line.</li>
                        <li>The stored energy in the torsion springs launches the hopper.</li>
                    </ol>
    
                    <h3>Calculations and Efficiency</h3>
                    <img className= 'detail-image' src={Hopper5} alt="Calculations" />
                    <p><strong>Calculations Explained:</strong></p>
                    <ol>
                        <li>Distance Measurement: Measure the stretch of the rubber band in cm and convert it to meters.</li>
                        <li>Weight Measurement: Measure the weight in grams and convert it to kilograms.</li>
                        <li>Force Calculation: Use the mass and acceleration due to gravity to calculate force in Newtons.</li>
                        <li>Energy Calculation: Estimate the stored energy by calculating the area under a graph representing force and distance.</li>
                        <li>Height Calculation: Use the stored energy, mass, and acceleration due to gravity to calculate theoretical height.</li>
                        <li>Efficiency Calculation: Calculate the efficiency of the hop by dividing actual height by theoretical height and converting it to a percentage.</li>
                    </ol>
                    <p><strong>Efficiency Result:</strong> The overall efficiency was approximately 16.2%.</p>
    
                    <h3>Next Steps and Improvements</h3>
                    <p><strong>Potential Improvements:</strong></p>
                    <ul>
                        <li>Increased Weight: Adding more weight to the platform to create more momentum.</li>
                        <li>Rubber Band Replacement: Replacing rubber bands with rubber tubing to store more energy.</li>
                        <li>Tighter Fishing Line: Ensuring the fishing line holds the platform more securely to maximize the rubber band stretch.</li>
                    </ul>
                    <p><strong>Future Work:</strong> Continuously test and refine the design. Explore alternative materials and mechanisms to increase the hopper's efficiency.</p>
    
                </>
            ),
            imageUrl: Hopper
        },
        {
            title: "Simplified Hangman Game",
            description: "This project explores simplifying the traditional word game Hangman through the use of a database containing over 350,000 English words. The system leverages a pandas DataFrame to provide hints based on the correctly guessed letters. Users interact with a console-based interface where they guess letters to form words. The game dynamically filters the database to suggest possible words, enhancing the traditional gameplay by integrating technological tools for a more engaging user experience. The project illustrates the practical application of database manipulation and pattern matching within game design.",
            details: (
                <>
                    <h3>Project Overview</h3>
                    <p>
                        The Simplified Hangman Game project aims to enhance the traditional word game Hangman by leveraging a database of over 350,000 English words. The primary objective is to provide hints based on the correctly guessed letters, making the game more interactive and engaging.
                    </p>
    
                    <h3>Source Data</h3>
                    <p>
                        The words database is sourced from a GitHub repository containing a comprehensive list of English words. The data is processed using pandas to facilitate efficient searching and hint generation.
                    </p>
    
                    <h3>Getting Help with Hangman</h3>
                    <p>
                        The game's code imports necessary libraries such as `os`, `pandas`, and `re`. It then downloads the words database and reads it into a pandas DataFrame for further processing.
                    </p>
                    <pre>
                        {`
                        import os
                        import pandas as pd
                        import re
                        
                        !wget https://raw.githubusercontent.com/dwyl/english-words/master/words_alpha.txt
                        
                        words_alpha_df = pd.read_csv('words_alpha.txt', header=None, names=['w'])
                        words_alpha_df.head(10)
                        `}
                    </pre>
    
                    <h3>Game Mechanics</h3>
                    <p>
                        The game starts by prompting the user to input a word. The system initializes the game with seven tries. Users guess letters, and the system checks whether the guessed letters are in the word. Incorrect guesses reduce the number of tries left.
                    </p>
    
                    <h3>Figure Drawing Function</h3>
                    <p>
                        The `figure_draw` function visually represents the hangman based on the number of incorrect tries. It displays different stages of the hangman as the game progresses.
                    </p>
                    <pre>
                        {`
                        def figure_draw(tries):
                            if tries == 7:
                                print(" ______ ")
                                print(" | ")
                                print(" | ")
                                print(" | ")
                                print(" | ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 6:
                                print(" ______ ")
                                print(" | | ")
                                print(" | ")
                                print(" | ")
                                print(" | ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 5:
                                print(" ______ ")
                                print(" | | ")
                                print(" | O ")
                                print(" | ")
                                print(" | ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 4:
                                print(" ______ ")
                                print(" | | ")
                                print(" | O ")
                                print(" | | ")
                                print(" | ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 3:
                                print(" ______ ")
                                print(" | | ")
                                print(" | O ")
                                print(" | /| ")
                                print(" | ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 2:
                                print(" ______ ")
                                print(" | | ")
                                print(" | O ")
                                print(" | /|\\")
                                print(" | ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 1:
                                print(" ______ ")
                                print(" | | ")
                                print(" | O ")
                                print(" | /|\\")
                                print(" | / ")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                            if tries == 0:
                                print(" ______ ")
                                print(" | | ")
                                print(" | O ")
                                print(" | /|\\")
                                print(" | / \\")
                                print("_|______")
                                print("| |___")
                                print("|_________|")
                                print('')
                        `}
                    </pre>

    
                    <h3>Hint Generation</h3>
                    <p>
                        The game provides hints by filtering the words database based on the correctly guessed letters and excluding incorrect guesses. This is achieved using regular expressions and pandas DataFrame operations.
                    </p>
                    <pre>
                        {`
                        def help(guesses, ls1, cr):
                            length_mask = (words_alpha_df['w'].str.len() == cr)
                            words_df = words_alpha_df.loc[length_mask]
                            rguesses = ''
                            for n in ls1:
                                if n == '_':
                                    rguesses += '.'
                                else:
                                    rguesses += n
                            wrong_regex = '[' + guesses + ']'
                            wrong_mask = ~words_df['w'].str.contains(guesses, flags=re.IGNORECASE)
                            right_mask = words_df['w'].str.contains(rguesses, flags=re.IGNORECASE)
                            mask = wrong_mask & right_mask
                            return words_df[mask].head(10)
                        `}
                    </pre>
    
                    <h3>Playing the Game</h3>
                    <p>
                        Users interact with the game via a console-based interface, guessing letters and receiving feedback on their guesses. The game continues until the word is guessed correctly or the user runs out of tries.
                    </p>
                    <pre>
                        {`
                        print("This is a Hangman Game!")
                        s = input("We recommend not using 'help' as it is a command in the game. Please enter a word: ")
                        print("You've got 7 tries! You ready?")
                        ls = list(s.lower())
                        cr = len(ls)
                        tries = 7
                        ls1 = []
                        guesses = ''
                        
                        for i in ls:
                            ls1.append("_")
                            print('_', end='')
                        print('\\n')
                        figure_draw(tries)
                        while ls != ls1:
                            count = 0
                            word = ''
                            c = input("What letter do you wanna guess?: ").lower()
                            if c == s:
                                break
                            elif c in ls:
                                print("Correct!")
                                pass
                            elif c != 'help':
                                print("Wrong. Try again!")
                                print("If you need help, type: 'help'")
                                guesses += c + ' '
                                tries -= 1
                            elif c == 'help':
                                print('These are a few words you can try!\\n')
                                print(help(guesses, ls1, cr))
                                print('\\n')
                        
                            for i in ls:
                                if i == c:
                                    ls1[count] = i
                                count += 1
                            for n in ls1:
                                word += n
                            print(word)
                            figure_draw(tries)
                            print("These are your guesses: " + guesses)
                            print("These are your tries left: " + str(tries))
                            if tries == 0:
                                break
                            print('')
                        
                        if tries == 0:
                            print("You've lost :(. Maybe next time!")
                        else:
                            print("You've won!")
                        
                        print("Thanks for playing!")
                        print("Hangman game by: Kevin Angulo Lezama")
                        `}
                    </pre>
    
                    <h3>Conclusion</h3>
                    <p>
                        This project demonstrates how to use a large database and Python programming to enhance a traditional game, making it more interactive and informative. The use of pandas for data manipulation and regular expressions for pattern matching are key components of this implementation.
                    </p>
                </>
            ),
            imageUrl: Hangman
        },
        {
            title: "Puzzle Alarm Box",
            description: "The Puzzle Alarm Box project combines utility with cognitive engagement, designed to revolutionize morning routines. It required users to solve three distinct puzzles to turn off the alarm and access their smartphone, secured inside the box overnight. The first puzzle involved memorizing a sequence of lights, the second required sequence guessing with buttons, and the third was a blind maze navigated via touch. These challenges aimed to awaken both mind and body, effectively preventing oversleeping and the habit of snoozing.",
            details: (
                <>
                    <h3>Project Overview</h3>
                    <p>
                        <strong>Our Aim:</strong>The objective of this project is to design and construct an innovative lock box that functions as a unique alarm clock, necessitating the solving of three engaging puzzles for access. This lock box is intended to securely hold a smartphone, which serves as the alarm. The project aims to blend practical utility with an interactive, brain-engaging experience to revolutionize morning routines.
                    </p>
                    <p>
                        <strong>Scenario:</strong> Users set their alarm on their phone, place it inside the box, and retire for the night. Upon the alarm's activation, they are required to engage in solving the three puzzles to retrieve their phone and silence the alarm. This inventive approach ensures that individuals are mentally stimulated upon waking, effectively preventing the common habits of snoozing and oversleeping.
                    </p>
                    <img className= 'detail-image' src={Box1} alt="Puzzle Alarm Box" />
    
                    <h3>Puzzle 1: Light Pattern Memorization</h3>
                    <p>
                        This dynamic puzzle is a key feature of our innovative lock box alarm clock, designed to awaken both the mind and the body. It incorporates four differently colored LEDs and a joystick for input. Each morning, the game generates a random pattern consisting of five flashes using these LEDs. Users are then challenged to accurately recall and replicate this pattern using the joystick.
                    </p>
                    <img className= 'detail-image' src={Box2} alt="Light Pattern Memorization" />
    
                    <h3>Puzzle 2: Sequence Guessing</h3>
                    <p>
                        This engaging component of our lock box alarm clock challenges users with a randomly generated sequence of five buttons. Upon waking, users must test their cognitive skills by accurately guessing the correct order of this sequence. This task not only stimulates the brain but also adds an element of fun and intrigue to the morning routine.
                    </p>
                    <img className= 'detail-image' src={Box3} alt="Sequence Guessing" />
    
                    <h3>Puzzle 3: Blind Maze</h3>
                    <p>
                        In this challenge, users are tasked with navigating a ball through a blind maze, relying solely on their sense of touch and spatial awareness. The goal is to guide the ball to the end of the maze, where a strategically placed photoresistor controls a latch mechanism. Successfully completing the maze triggers the photoresistor, which in turn unlocks the box.
                    </p>
    
                    <h3>Latch Mechanism</h3>
                    <p>
                        The latch system of our unique lock box, essential for the "Blind Maze Challenge", comprises several key components:
                    </p>
                    <ul>
                        <li><strong>12V Power Supply:</strong> The backbone of the latch system, providing steady and reliable energy to power the locking mechanism.</li>
                        <li><strong>Push/Pull Solenoid:</strong> Acts as the primary locking device. It locks or unlocks the box in response to signals from the photoresistor, effectively controlling access based on the puzzle's completion.</li>
                        <li><strong>Clear, Removable Top Piece:</strong> Offers a visual insight into the puzzle's inner workings, enhancing user engagement. It also facilitates easy maintenance and adjustments.</li>
                        <li><strong>Photoresistor at Maze End:</strong> A key sensor placed strategically at the end of the maze. It detects the successful navigation of the ball, triggering the solenoid to release the lock.</li>
                    </ul>
                    <img className= 'detail-image' src={Box4} alt="Latch Mechanism" />
    
                    <h3>Challenges</h3>
                    <p>
                        <strong>1. Dense Code:</strong> Writing and optimizing complex code was a significant challenge, requiring careful planning and testing to ensure functionality and reliability.
                    </p>
                    <p>
                        <strong>2. Pin Mismatch:</strong> Ensuring compatibility and correct connections between various electronic components, such as the photoresistor, solenoid, and LEDs, was a meticulous task, often complicated by pin mismatches.
                    </p>
                    <p>
                        <strong>3. Combining Code Together:</strong> Integrating various segments of code to work seamlessly together presented a unique challenge, as it demanded a deep understanding of each component’s interaction within the system.
                    </p>
                    <p>
                        <strong>4. Assembly:</strong> The physical assembly of the lock box, especially aligning the electronic components with the mechanical parts, was a meticulous and challenging process.
                    </p>
    
                    <h3>End Result/Demo</h3>
                    <p>
                        The final design successfully integrated all the components and functionalities as planned. Users were required to solve the three puzzles to unlock the box and access their phone, effectively engaging their cognitive skills and preventing oversleeping.
                    </p>
                    <iframe title="BoxPuzzle" src="https://drive.google.com/file/d/1ZJWPUwZgkAXHjnIbqbqooWPl6funJen1/preview" width="640" height="480" allow="autoplay"></iframe>

                </>
            ),
            imageUrl: Box
        },
        {
            title: "Information Security Website",
            description: "The Information Security project offers a comprehensive guide on safeguarding data against cyber threats. It covers the importance of VPNs for creating secure connections, recognizing and avoiding phishing scams, tech support scams, and fake shopping sites. The project emphasizes the significance of using strong, complex passwords to enhance security, and includes a password generator tool for creating robust passwords. This initiative is crucial for educating users on preventing unauthorized access and ensuring data integrity in an increasingly digital world.",
            details: (
                <>
                    <h3>Project Overview</h3>
                    <p>
                        The Information Security project provides a detailed guide on how to protect personal and sensitive data from various cyber threats. The website covers several key areas of information security, including the use of VPNs, recognizing phishing scams, avoiding tech support scams, and identifying fake shopping sites.
                    </p>
    
                    <h3>Importance of VPNs</h3>
                    <p>
                        VPNs (Virtual Private Networks) are essential for creating secure connections over the internet. They encrypt your internet traffic, ensuring that your data is safe from hackers and eavesdroppers. The project explains how VPNs work and why they are important for maintaining privacy online.
                    </p>
    
                    <h3>Recognizing Phishing Scams</h3>
                    <p>
                        Phishing scams are fraudulent attempts to obtain sensitive information by disguising as a trustworthy entity. The website provides tips on how to recognize phishing emails and websites, and what steps to take if you suspect a phishing attempt.
                    </p>
    
                    <h3>Avoiding Tech Support Scams</h3>
                    <p>
                        Tech support scams involve fraudsters posing as technical support representatives to gain access to your computer or financial information. The project offers advice on how to identify these scams and protect yourself from falling victim to them.
                    </p>
    
                    <h3>Identifying Fake Shopping Sites</h3>
                    <p>
                        Fake shopping sites are designed to steal your money and personal information. The website outlines the warning signs of a fake shopping site and provides guidelines on how to verify the legitimacy of online stores before making a purchase.
                    </p>
    
                    <h3>Using Strong, Complex Passwords</h3>
                    <p>
                        Strong passwords are crucial for protecting your online accounts from unauthorized access. The project emphasizes the importance of using complex passwords and includes a password generator tool to help users create robust passwords.
                    </p>
    
                    <h3>Password Generator Tool</h3>
                    <p>
                        The password generator tool is a feature of the website that helps users create strong and unique passwords. It provides options to customize the length and complexity of the passwords, ensuring maximum security.
                    </p>

    
                    <h3>Conclusion</h3>
                    <p>
                        This Information Security project is a valuable resource for anyone looking to enhance their knowledge of cyber security. By covering various aspects of information security and providing practical tools and tips, the project aims to educate and empower users to protect their personal and sensitive data from cyber threats.
                    </p>
                    <iframe title='InformationSec' src="https://kevinjangulo.github.io/InformationSecurityFinal/" width="80%" height="600px"></iframe>
                    <a style={{alignSelf: "center"}}href="https://kevinjangulo.github.io/InformationSecurityFinal/" target="_blank" rel="noopener noreferrer">Click here to visit the website!</a>
                </>
            ),
            imageUrl: Information
        },
        {
            title: "Advanced Modeling of the N-Queens Problem",
            description: "In this project, I delve into the N-Queens problem, employing the Alloy modeling language to understand and identify the fundamentally distinct solutions of the puzzle on different board sizes. Starting with a 4x4 board, the goal is to refine and perfect the approach before applying it to an 8x8 board. By focusing on distinguishing between fundamentally distinct solutions and those derived through symmetrical transformations, the project not only addresses algorithmic efficiency but also explores the deeper mathematical and computational facets of the N-Queens problem.",
            details: (
                <>
                    <h3>Project Overview</h3>
                    <p>
                        The N-Queens problem is a classic puzzle in combinatorics and computer science, involving the placement of N queens on an N×N chessboard such that no two queens threaten each other. This means no two queens can share the same row, column, or diagonal. The primary objective of this project is to develop and analyze an algorithmic model that efficiently approximates the fundamental solutions of the N-Queens problem.
                    </p>
    
                    <h3>Objective</h3>
                    <p>
                        The primary objective of this project is to develop and analyze an algorithmic model that efficiently approximates the fundamental solutions of the N-Queens problem. Fundamental solutions are those that are unique and cannot be derived from each other through symmetries like rotation or reflection. For an 8x8 chessboard, it is known that there are 92 solutions, but only 12 of these are fundamentally distinct. Our focus is to answer the question: “How can we construct an algorithmic model that consistently identifies or approximates these 12 fundamental solutions in the N-Queens problem?”. In our approach, we’ll initially focus on a 4x4 chessboard, aiming to identify its fundamental solutions. This will set the groundwork for us to apply similar methods to a larger 8x8 chessboard.
                    </p>
    
                    <h3>Methodology</h3>
                    <p>
                        The methodology involved a comprehensive review of existing algorithms and documentation for the N-Queens problem, with a focus on distinguishing fundamental solutions. The model was developed using Alloy, a declarative modeling language, to create constraints for the problem. The approach included:
                    </p>
                    <ul>
                        <li>
                            <strong>Literature Review:</strong> A thorough review of existing algorithms and documentation to understand the problem and identify the fundamental solutions.
                        </li>
                        <li>
                            <strong>Algorithm Development:</strong> Modeling the N-Queens problem in Alloy using predicates that act as basic constraints for the problem.
                        </li>
                        <li>
                            <strong>Simulation and Testing:</strong> Testing the model on both 4x4 and 8x8 chessboards to assess its effectiveness and precision in reducing the variable and approaching the fundamental solutions as closely as possible.
                        </li>
                    </ul>
                    <p>
                        The methodology also involved the use of symmetry-breaking constraints to selectively permit certain symmetric solutions while filtering out the rest. This approach became increasingly intricate as the number of elements (N) grew but offered enhanced control over the preservation of specific solutions.
                    </p>
    
                    <h3>Findings</h3>
                    <p>
                        The findings indicated that by imposing a predetermined sequence, Alloy's options were limited, steering it towards an optimal solution through a reduced range of choices. For the 4x4 chessboard, two distinct solutions were found, and for the 8x8 chessboard, 92 distinct solutions were identified. The use of symmetry-breaking constraints proved effective in reducing the generation of symmetric solutions while ensuring the retention of at least one instance from each group of symmetric solutions.
                    </p>
    
                    <h3>Conclusion</h3>
                    <p>
                        To address the question of constructing an algorithmic model for the N-Queens problem, this project developed an approach using Alloy to consistently identify or approximate the 12 fundamental solutions. The methodology involved a comprehensive review of existing literature, the development of a tailored algorithm, and robust testing on chessboards of varying sizes, starting with 4x4 models as a foundational step toward the more complex 8x8 board evaluations. Ultimately, this led to the identification of the fundamental solutions and the confirmation that all solutions derived from Alloy are symmetrical to a fundamental solution. Further optimization can be explored to make the algorithm more efficient, especially for larger chessboard sizes.
                    </p>
    
                    <h3>Resources</h3>
                    <ul>
                        <li><a href="https://en.wikipedia.org/w/index.php?title=Eight_queens_puzzle&oldid=1184794727" target="_blank" rel="noopener noreferrer">Eight Queens Puzzle - Wikipedia</a></li>
                        <li><a href="https://alloy.readthedocs.io/en/latest/" target="_blank" rel="noopener noreferrer">Alloy Documentation</a></li>
                    </ul>
    
                    <h3>Alloy Model Code</h3>
                    <pre>
                        {`
                        open util/ordering[Board]
                        
                        abstract sig Position {}
                        
                        one sig A1, A2, A3, A4, A5, A6, A7, A8,
                                B1, B2, B3, B4, B5, B6, B7, B8,
                                C1, C2, C3, C4, C5, C6, C7, C8,
                                D1, D2, D3, D4, D5, D6, D7, D8,
                                E1, E2, E3, E4, E5, E6, E7, E8,
                                F1, F2, F3, F4, F5, F6, F7, F8,
                                G1, G2, G3, G4, G5, G6, G7, G8,
                                H1, H2, H3, H4, H5, H6, H7, H8
                            extends Position {}
                        
                        
                        sig Board {
                            Queens: set Position
                        }
                        
                        pred inLine[p1, p2: Position] {
                            // Check if in the same row
                            (p1 + p2 in A1+A2+A3+A4+A5+A6+A7+A8) or
                            (p1 + p2 in B1+B2+B3+B4+B5+B6+B7+B8) or
                            (p1 + p2 in C1+C2+C3+C4+C5+C6+C7+C8) or
                            (p1 + p2 in D1+D2+D3+D4+D5+D6+D7+D8) or
                            (p1 + p2 in E1+E2+E3+E4+E5+E6+E7+E8) or
                            (p1 + p2 in F1+F2+F3+F4+F5+F6+F7+F8) or
                            (p1 + p2 in G1+G2+G3+G4+G5+G6+G7+G8) or
                            (p1 + p2 in H1+H2+H3+H4+H5+H6+H7+H8) or
                            // Check if in the same column
                            (p1 + p2 in A1+B1+C1+D1+E1+F1+G1+H1) or
                            (p1 + p2 in A2+B2+C2+D2+E2+F2+G2+H2) or
                            (p1 + p2 in A3+B3+C3+D3+E3+F3+G3+H3) or
                            (p1 + p2 in A4+B4+C4+D4+E4+F4+G4+H4) or
                            (p1 + p2 in A5+B5+C5+D5+E5+F5+G5+H5) or
                            (p1 + p2 in A6+B6+C6+D6+E6+F6+G6+H6) or
                            (p1 + p2 in A7+B7+C7+D7+E7+F7+G7+H7) or
                            (p1 + p2 in A8+B8+C8+D8+E8+F8+G8+H8) or
                            // Main Diagonals (Top-Left to Bottom-Right)
                            (p1 + p2 in A7+B8) or
                            (p1 + p2 in A6+B7+C8) or
                            (p1 + p2 in A5+B6+C7+D8) or
                            (p1 + p2 in A4+B5+C6+D7+E8) or
                            (p1 + p2 in A3+B4+C5+D6+E7+F8) or
                            (p1 + p2 in A2+B3+C4+D5+E6+F7+G8) or
                            (p1 + p2 in A1+B2+C3+D4+E5+F6+G7+H8) or
                            (p1 + p2 in B1+C2+D3+E4+F5+G6+H7) or
                            (p1 + p2 in C1+D2+E3+F4+G5+H6) or
                            (p1 + p2 in D1+E2+F3+G4+H5) or
                            (p1 + p2 in E1+F2+G3+H4) or
                            (p1 + p2 in F1+G2+H3) or
                            (p1 + p2 in G1+H2) or
                            // Anti-Diagonals (Top-Right to Bottom-Left)
                            (p1 + p2 in H7+G8) or
                            (p1 + p2 in H6+G7+F8) or
                            (p1 + p2 in H5+G6+F7+E8) or
                            (p1 + p2 in H4+G5+F6+E7+D8) or
                            (p1 + p2 in H3+G4+F5+E6+D7+C8) or
                            (p1 + p2 in H2+G3+F4+E5+D6+C7+B8) or
                            (p1 + p2 in H1+G2+F3+E4+D5+C6+B7+A8) or
                            (p1 + p2 in G1+F2+E3+D4+C5+B6+A7) or
                            (p1 + p2 in F1+E2+D3+C4+B5+A6) or
                            (p1 + p2 in E1+D2+C3+B4+A5) or
                            (p1 + p2 in D1+C2+B3+A4) or
                            (p1 + p2 in C1+B2+A3) or
                            (p1 + p2 in B1+A2) 
                        }
                            
                        
                        pred isOpen[b: Board, p: Position] {
                            not p in b.Queens
                        }
                        
                        pred firstBoardWithQueen[b: Board] {
                            #b.Queens = 1 and
                            some p: Position | b.Queens = p
                        }
                        
                        
                        pred isSafeBoard[b: Board] {
                            all disj q1, q2: b.Queens | not inLine[q1, q2]
                        }
                        
                        pred addQueen[b1, b2: Board] {
                            some p: Position | 
                                isOpen[b1, p] and 
                                b2.Queens = b1.Queens + p and
                                isSafeBoard[b2] 
                        }
                        
                        pred noOverlap[b: Board] {
                            all disj q1, q2: b.Queens | q1 != q2
                        }
                        
                        pred game {
                            firstBoardWithQueen[first]
                            all b: Board - last | addQueen[b, b.next] and noOverlap[b] 
                        }
                        
                        run game for 8 Board
                        
                        
                        /*This method yields accurate results, but due to Alloy's autonomous decision-making on the starting point, 
                        identical solutions are perceived as distinct based on their sequence. 
                        Essentially, the sequence in which solutions are presented is significant to Alloy.
                        */
                        
                        //Question: How can we restrict the different solutions to the problem?
                        
                        // returns the row number
                        fun rowNumber[p: Position]: Int {
                            (p in A1+A2+A3+A4+A5+A6+A7+A8) => 8 else
                            (p in B1+B2+B3+B4+B5+B6+B7+B8) => 1 else
                            (p in C1+C2+C3+C4+C5+C6+C7+C8) => 2 else
                            (p in D1+D2+D3+D4+D5+D6+D7+D8) => 3 else
                            (p in E1+E2+E3+E4+E5+E6+E7+E8) => 4 else
                            (p in F1+F2+F3+F4+F5+F6+F7+F8) => 5 else
                            (p in G1+G2+G3+G4+G5+G6+G7+G8) => 6 else 7
                        } 
                        
                        
                        pred addQueenRestricted[b1, b2: Board] {
                            some p: Position | 
                                isOpen[b1, p] and 
                                b2.Queens = b1.Queens + p and
                                isSafeBoard[b2] and
                                all q: b1.Queens | rowNumber[q] <= rowNumber[p] // This makes sure the queen is added A->H
                        }
                        
                        pred gameWithRestrictedSolutions8 {
                            firstBoardWithQueen[first] 
                            all b: Board - last | addQueenRestricted[b, b.next] and noOverlap[b]
                        }
                        
                        run gameWithRestrictedSolutions8 for 8 Board
                        /*
                        By imposing a predetermined sequence from A to H, this approach limits Alloy's options,
                        steering it towards an optimal solution through a reduced range of choices.
                        */
                        
                        
                        // Assertion in Alloy model that verifies there are no other solutions for gameWithRestrictedSolutions.
                        assert NoOtherSolutionsForGameWithRestrictedSolutions8x8 {
                            all b: Board | (
                                firstBoardWithQueen[b] and
                                all b2: Board - last | addQueenRestricted[b2, b2.next] and noOverlap[b2]
                            ) implies (
                                all disj q1, q2: b.Queens | 
                                    rowNumber[q1] <= rowNumber[q2]
                            )
                        }
                        
                        check NoOtherSolutionsForGameWithRestrictedSolutions8x8 for 8 Board
                        
                        /*
                        Trying to find fundamental solutions. 
                        */
                        
                        
                        // Hard-code rotations.
                        fun mirrorHorizontal[p: Position]: set Position {
                            {p: Position, q: Position |
                                (p = A1 and q = H1) or (p = A2 and q = H2) or (p = A3 and q = H3) or (p = A4 and q = H4) or
                                (p = A5 and q = H5) or (p = A6 and q = H6) or (p = A7 and q = H7) or (p = A8 and q = H8) or
                                (p = B1 and q = G1) or (p = B2 and q = G2) or (p = B3 and q = G3) or (p = B4 and q = G4) or
                                (p = B5 and q = G5) or (p = B6 and q = G6) or (p = B7 and q = G7) or (p = B8 and q = G8) or
                                (p = C1 and q = F1) or (p = C2 and q = F2) or (p = C3 and q = F3) or (p = C4 and q = F4) or
                                (p = C5 and q = F5) or (p = C6 and q = F6) or (p = C7 and q = F7) or (p = C8 and q = F8) or
                                (p = D1 and q = E1) or (p = D2 and q = E2) or (p = D3 and q = E3) or (p = D4 and q = E4) or
                                (p = D5 and q = E5) or (p = D6 and q = E6) or (p = D7 and q = E7) or (p = D8 and q = E8) or
                                (p = E1 and q = D1) or (p = E2 and q = D2) or (p = E3 and q = D3) or (p = E4 and q = D4) or
                                (p = E5 and q = D5) or (p = E6 and q = D6) or (p = E7 and q = D7) or (p = E8 and q = D8) or
                                (p = F1 and q = C1) or (p = F2 and q = C2) or (p = F3 and q = C3) or (p = F4 and q = C4) or
                                (p = F5 and q = C5) or (p = F6 and q = C6) or (p = F7 and q = C7) or (p = F8 and q = C8) or
                                (p = G1 and q = B1) or (p = G2 and q = B2) or (p = G3 and q = B3) or (p = G4 and q = B4) or
                                (p = G5 and q = B5) or (p = G6 and q = B6) or (p = G7 and q = B7) or (p = G8 and q = B8) or
                                (p = H1 and q = A1) or (p = H2 and q = A2) or (p = H3 and q = A3) or (p = H4 and q = A4) or
                                (p = H5 and q = A5) or (p = H6 and q = A6) or (p = H7 and q = A7) or (p = H8 and q = A8)
                            }[p]
                        }
                        
                        
                        fun mirrorVertical[p: Position]: set Position {
                            {p: Position, q: Position |
                                (p = A1 and q = A8) or (p = A2 and q = A7) or (p = A3 and q = A6) or (p = A4 and q = A5) or
                                (p = A5 and q = A4) or (p = A6 and q = A3) or (p = A7 and q = A2) or (p = A8 and q = A1) or
                                (p = B1 and q = B8) or (p = B2 and q = B7) or (p = B3 and q = B6) or (p = B4 and q = B5) or
                                (p = B5 and q = B4) or (p = B6 and q = B3) or (p = B7 and q = B2) or (p = B8 and q = B1) or
                                (p = C1 and q = C8) or (p = C2 and q = C7) or (p = C3 and q = C6) or (p = C4 and q = C5) or
                                (p = C5 and q = C4) or (p = C6 and q = C3) or (p = C7 and q = C2) or (p = C8 and q = C1) or
                                (p = D1 and q = D8) or (p = D2 and q = D7) or (p = D3 and q = D6) or (p = D4 and q = D5) or
                                (p = D5 and q = D4) or (p = D6 and q = D3) or (p = D7 and q = D2) or (p = D8 and q = D1) or
                                (p = E1 and q = E8) or (p = E2 and q = E7) or (p = E3 and q = E6) or (p = E4 and q = E5) or
                                (p = E5 and q = E4) or (p = E6 and q = E3) or (p = E7 and q = E2) or (p = E8 and q = E1) or
                                (p = F1 and q = F8) or (p = F2 and q = F7) or (p = F3 and q = F6) or (p = F4 and q = F5) or
                                (p = F5 and q = F4) or (p = F6 and q = F3) or (p = F7 and q = F2) or (p = F8 and q = F1) or
                                (p = G1 and q = G8) or (p = G2 and q = G7) or (p = G3 and q = G6) or (p = G4 and q = G5) or
                                (p = G5 and q = G4) or (p = G6 and q = G3) or (p = G7 and q = G2) or (p = G8 and q = G1) or
                                (p = H1 and q = H8) or (p = H2 and q = H7) or (p = H3 and q = H6) or (p = H4 and q = H5) or
                                (p = H5 and q = H4) or (p = H6 and q = H3) or (p = H7 and q = H2) or (p = H8 and q = H1)
                            }[p]
                        }
                        
                        fun rotate90[p: Position]: set Position {
                            {p: Position, q: Position |
                                (p = A1 and q = H1) or (p = A2 and q = H2) or (p = A3 and q = H3) or (p = A4 and q = H4) or
                                (p = A5 and q = H5) or (p = A6 and q = H6) or (p = A7 and q = H7) or (p = A8 and q = H8) or
                                (p = B1 and q = G1) or (p = B2 and q = G2) or (p = B3 and q = G3) or (p = B4 and q = G4) or
                                (p = B5 and q = G5) or (p = B6 and q = G6) or (p = B7 and q = G7) or (p = B8 and q = G8) or
                                (p = C1 and q = F1) or (p = C2 and q = F2) or (p = C3 and q = F3) or (p = C4 and q = F4) or
                                (p = C5 and q = F5) or (p = C6 and q = F6) or (p = C7 and q = F7) or (p = C8 and q = F8) or
                                (p = D1 and q = E1) or (p = D2 and q = E2) or (p = D3 and q = E3) or (p = D4 and q = E4) or
                                (p = D5 and q = E5) or (p = D6 and q = E6) or (p = D7 and q = E7) or (p = D8 and q = E8) or
                                (p = E1 and q = D1) or (p = E2 and q = D2) or (p = E3 and q = D3) or (p = E4 and q = D4) or
                                (p = E5 and q = D5) or (p = E6 and q = D6) or (p = E7 and q = D7) or (p = E8 and q = D8) or
                                (p = F1 and q = C1) or (p = F2 and q = C2) or (p = F3 and q = C3) or (p = F4 and q = C4) or
                                (p = F5 and q = C5) or (p = F6 and q = C6) or (p = F7 and q = C7) or (p = F8 and q = C8) or
                                (p = G1 and q = B1) or (p = G2 and q = B2) or (p = G3 and q = B3) or (p = G4 and q = B4) or
                                (p = G5 and q = B5) or (p = G6 and q = B6) or (p = G7 and q = B7) or (p = G8 and q = B8) or
                                (p = H1 and q = A1) or (p = H2 and q = A2) or (p = H3 and q = A3) or (p = H4 and q = A4) or
                                (p = H5 and q = A5) or (p = H6 and q = A6) or (p = H7 and q = A7) or (p = H8 and q = A8)
                            }[p]
                        }
                        
                        fun rotate180[p: Position]: set Position {
                            {p: Position, q: Position |
                                (p = A1 and q = H8) or (p = A2 and q = H7) or (p = A3 and q = H6) or (p = A4 and q = H5) or
                                (p = A5 and q = H4) or (p = A6 and q = H3) or (p = A7 and q = H2) or (p = A8 and q = H1) or
                                (p = B1 and q = G8) or (p = B2 and q = G7) or (p = B3 and q = G6) or (p = B4 and q = G5) or
                                (p = B5 and q = G4) or (p = B6 and q = G3) or (p = B7 and q = G2) or (p = B8 and q = G1) or
                                (p = C1 and q = F8) or (p = C2 and q = F7) or (p = C3 and q = F6) or (p = C4 and q = F5) or
                                (p = C5 and q = F4) or (p = C6 and q = F3) or (p = C7 and q = F2) or (p = C8 and q = F1) or
                                (p = D1 and q = E8) or (p = D2 and q = E7) or (p = D3 and q = E6) or (p = D4 and q = E5) or
                                (p = D5 and q = E4) or (p = D6 and q = E3) or (p = D7 and q = E2) or (p = D8 and q = E1) or
                                (p = E1 and q = D8) or (p = E2 and q = D7) or (p = E3 and q = D6) or (p = E4 and q = D5) or
                                (p = E5 and q = D4) or (p = E6 and q = D3) or (p = E7 and q = D2) or (p = E8 and q = D1) or
                                (p = F1 and q = C8) or (p = F2 and q = C7) or (p = F3 and q = C6) or (p = F4 and q = C5) or
                                (p = F5 and q = C4) or (p = F6 and q = C3) or (p = F7 and q = C2) or (p = F8 and q = C1) or
                                (p = G1 and q = B8) or (p = G2 and q = B7) or (p = G3 and q = B6) or (p = G4 and q = B5) or
                                (p = G5 and q = B4) or (p = G6 and q = B3) or (p = G7 and q = B2) or (p = G8 and q = B1) or
                                (p = H1 and q = A8) or (p = H2 and q = A7) or (p = H3 and q = A6) or (p = H4 and q = A5) or
                                (p = H5 and q = A4) or (p = H6 and q = A3) or (p = H7 and q = A2) or (p = H8 and q = A1)
                            }[p]
                        }
                        
                        fun rotate270[p: Position]: set Position {
                            {p: Position, q: Position |
                                (p = A1 and q = A8) or (p = A2 and q = B8) or (p = A3 and q = C8) or (p = A4 and q = D8) or
                                (p = A5 and q = E8) or (p = A6 and q = F8) or (p = A7 and q = G8) or (p = A8 and q = H8) or
                                (p = B1 and q = A7) or (p = B2 and q = B7) or (p = B3 and q = C7) or (p = B4 and q = D7) or
                                (p = B5 and q = E7) or (p = B6 and q = F7) or (p = B7 and q = G7) or (p = B8 and q = H7) or
                                (p = C1 and q = A6) or (p = C2 and q = B6) or (p = C3 and q = C6) or (p = C4 and q = D6) or
                                (p = C5 and q = E6) or (p = C6 and q = F6) or (p = C7 and q = G6) or (p = C8 and q = H6) or
                                (p = D1 and q = A5) or (p = D2 and q = B5) or (p = D3 and q = C5) or (p = D4 and q = D5) or
                                (p = D5 and q = E5) or (p = D6 and q = F5) or (p = D7 and q = G5) or (p = D8 and q = H5) or
                                (p = E1 and q = A4) or (p = E2 and q = B4) or (p = E3 and q = C4) or (p = E4 and q = D4) or
                                (p = E5 and q = E4) or (p = E6 and q = F4) or (p = E7 and q = G4) or (p = E8 and q = H4) or
                                (p = F1 and q = A3) or (p = F2 and q = B3) or (p = F3 and q = C3) or (p = F4 and q = D3) or
                                (p = F5 and q = E3) or (p = F6 and q = F3) or (p = F7 and q = G3) or (p = F8 and q = H3) or
                                (p = G1 and q = A2) or (p = G2 and q = B2) or (p = G3 and q = C2) or (p = G4 and q = D2) or
                                (p = G5 and q = E2) or (p = G6 and q = F2) or (p = G7 and q = G2) or (p = G8 and q = H2) or
                                (p = H1 and q = A1) or (p = H2 and q = B1) or (p = H3 and q = C1) or (p = H4 and q = D1) or
                                (p = H5 and q = E1) or (p = H6 and q = F1) or (p = H7 and q = G1) or (p = H8 and q = H1)
                            }[p]
                        }
                        
                        pred horizontalSymmetry[b1, b2: Board] {
                            all p: b1.Queens | mirrorHorizontal[p] in b2.Queens
                        }
                        
                        pred verticalSymmetry[b1, b2: Board] {
                            all p: b1.Queens | mirrorVertical[p] in b2.Queens
                        }
                        
                        pred rotation90Symmetry[b1, b2: Board] {
                            all p: b1.Queens | rotate90[p] in b2.Queens
                        }
                        
                        pred rotation180Symmetry[b1, b2: Board] {
                            all p: b1.Queens | rotate180[p] in b2.Queens
                        }
                        
                        pred rotation270Symmetry[b1, b2: Board] {
                            all p: b1.Queens | rotate270[p] in b2.Queens
                        }
                        
                        //True if it's symmetric.
                        pred isSymmetric[b1, b2: Board] {
                            horizontalSymmetry[b1, b2] or
                            verticalSymmetry[b1, b2] or
                            rotation90Symmetry[b1, b2] or
                            rotation180Symmetry[b1, b2] or
                            rotation270Symmetry[b1, b2]
                        }
                        
                        //Fundamental solutions for 8x8
                        
                        // Solution 1
                        pred Solution1[b: Board] {
                            b.Queens = A2 + B4 + C6 + D8 + E3 + F1 + G7 + H5
                        }
                        
                        
                        // Solution 2
                        pred Solution2[b: Board] {
                            b.Queens = A1 + B7 + C4 + D6 + E8 + F2 + G5 + H3
                        }
                        
                        
                        // Solution 3
                        pred Solution3[b: Board] {
                            b.Queens = A1 + B7 + C5 + D8 + E2 + F4 + G6 + H3
                        }
                        
                        // Solution 4
                        pred Solution4[b: Board] {
                            b.Queens = A4 + B1 + C5 + D8 + E2 + F7 + G3 + H6
                        }
                        
                        // Solution 5
                        pred Solution5[b: Board] {
                            b.Queens = A5 + B1 + C8 + D4 + E2 + F7 + G3 + H6
                        }
                        
                        // Solution 6 
                        pred Solution6[b: Board] {
                            b.Queens = A3 + B1 + C7 + D5 + E8 + F2 + G4 + H6
                        }
                        
                        // Solution 7 
                        pred Solution7[b: Board] {
                            b.Queens = A5 + B1 + C4 + D6 + E8 + F2 + G7 + H3
                        }
                        
                        // Solution 8
                        pred Solution8[b: Board] {
                            b.Queens = A7 + B1 + C3 + D8 + E6 + F4 + G2 + H5
                        }
                        
                        // Solution 9
                        pred Solution9[b: Board] {
                            b.Queens = A5 + B1 + C8 + D6 + E3 + F7 + G2 + H4
                        }
                        
                        // Solution 10
                        pred Solution10[b: Board] {
                            b.Queens = A5 + B7 + C1 + D4 + E2 + F8 + G6 + H3
                        }
                        
                        // Solution 11
                        pred Solution11[b: Board] {
                            b.Queens = A6 + B3 + C1 + D8 + E4 + F2 + G7 + H5
                        }
                        
                        // Solution 12 
                        pred Solution12[b: Board] {
                            b.Queens = A5 + B3 + C1 + D7 + E2 + F8 + G6 + H4
                        }
                        
                        
                        // Making Boards with the solutions. 
                        one sig Solution1Board extends Board {}
                        one sig Solution2Board extends Board {}
                        one sig Solution3Board extends Board {}
                        one sig Solution4Board extends Board {}
                        one sig Solution5Board extends Board {}
                        one sig Solution6Board extends Board {}
                        one sig Solution7Board extends Board {}
                        one sig Solution8Board extends Board {}
                        one sig Solution9Board extends Board {}
                        one sig Solution10Board extends Board {}
                        one sig Solution11Board extends Board {}
                        one sig Solution12Board extends Board {}
                        
                        fact {
                            Solution1[Solution1Board]
                            Solution2[Solution2Board]
                            Solution3[Solution3Board]
                            Solution4[Solution4Board]
                            Solution5[Solution5Board]
                            Solution6[Solution6Board]
                            Solution7[Solution7Board]
                            Solution8[Solution8Board]
                            Solution9[Solution9Board]
                            Solution10[Solution10Board]
                            Solution11[Solution11Board]
                            Solution12[Solution12Board]
                        
                        }
                        //Theorem: All solutions are symmetric to the fundamental solutions.
                        assert FundamentalSolutionsAreSymmetricToAll {
                            all b: Board | gameWithRestrictedSolutions8
                                implies 
                            (
                                isSymmetric[b, Solution1Board] or
                                isSymmetric[b, Solution2Board] or
                                isSymmetric[b, Solution3Board] or
                                isSymmetric[b, Solution4Board] or
                                isSymmetric[b, Solution5Board] or
                                isSymmetric[b, Solution6Board] or
                                isSymmetric[b, Solution7Board] or
                                isSymmetric[b, Solution8Board] or
                            isSymmetric[b, Solution9Board] or
                                isSymmetric[b, Solution10Board] or
                                isSymmetric[b, Solution11Board] or
                                isSymmetric[b, Solution12Board] 
                            )
                        }
                        
                        check FundamentalSolutionsAreSymmetricToAll for 8 Board
                        //No counterexample found. This means Solution1 through Solution12 are fundamental solutions 
                        //and all other solutions are symmetric to at least one of them.
                        `}
                    </pre>
                </>
            ),
            imageUrl: NQueens
        },
        {
            title: "Soft Robots Lab Student Researcher",
            description: "My project is part of innovative research in robot component manufacturing using knitting technologies. I focus on developing an automated pneumatic system integrated with Arduino for soft robotics applications. This system meticulously monitors air pressure in a balloon, replicating limb movements and assessing the performance of robotic textiles.",
            details: (
                <>
                    <h3>Project Overview</h3>
                    <p>
                        We will build components of robots using knitting as the manufacturing process. This will involve learning a mix of mechanical and electrical skills, general research and physical lab skills, and writing programs for equipment such as knitting machines, multimeters, and Arduinos.
                    </p>
    
                    <h3>Team Goal</h3>
                    <p>
                        Focusing on developing actuation methods for soft bodies which can be controlled via feedback from knitted position sensors.
                    </p>
    
                    <h3>My Specific Role</h3>
                    <p>
                        My part of the project will be developing a pneumatic control board to control the motion of a tentacle using feedback from knitted sensors.
                    </p>
                    <iframe title="Robot" src="https://drive.google.com/file/d/1gK4hFiptRbhHXDEBIGOLpsYqq5G5qo_I/preview" width="640" height="480" allow="autoplay"></iframe>
                    <br/>
                    <a style={{alignSelf: "center"}}href="https://github.com/Wesleyan-Soft-Robots-Lab/ArduinoMotors" target="_blank" rel="noopener noreferrer">Click here to check out our github repository!</a>
                </>
            ),
            imageUrl: Robots // Replace with the actual image URL
        }
        
        
        
        
    ];

    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover');
        }, 3000);
        return () => clearTimeout(timer);
    }, []);

    const handleImageClick = (index) => {
        setVisiblePopUp(index);
    };

    const closePopUp = () => {
        setVisiblePopUp(null);
    };

    return (
        <>
            <div className='project-page'>
                    {projects.map((project, index) => (
                        <div className="project-container" key={index}>
                            <div className='text-zone-project'>
                            <h3>
                                <AnimatedLetters letterClass={letterClass} strArray={project.title.split('')} idx={15} />
                            </h3>
                            <p><div className="project-description">{project.description}</div></p>
                            </div>
                            <div className='image-container'>
                            <img src={project.imageUrl} alt={project.title} className="project-image" onClick={() => handleImageClick(index)}/>
                            </div>
                            <br/>
                        </div>
                        
                    ))}
            </div>
            {visiblePopUp !== null && (
                <PopUp
                    project={projects[visiblePopUp]}
                    onClose={closePopUp}
                />
            )}
            <Loader type="ball-scale-ripple-multiple" />
        </>
    );
}

export default Projects;
