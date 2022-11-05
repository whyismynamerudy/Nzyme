"""Generated summarized paragraph for input text"""
import cohere

co = cohere.Client('MklIKiJvqX1nFagSi1jRU4k9YxoxfLwZvRG6xIUJ')


def summarize(prompt: str):
    """summarizes the input prompt

    prompt: string containing the info that needs to be summarized"""
    response = co.generate(
        model='xlarge',
        prompt=prompt,
        return_likelihoods='GENERATION',
        stop_sequences=['"'],
        max_tokens=50,
        temperature=0.7,
        num_generations=5,
        k=0,
        p=0.75)

    return response


sample_text = '''Passage: " Combinational logic is often grouped into larger building blocks to build more complex systems. This is an application of the principle of abstraction, hiding the unnecessary gate-level details to emphasize the function of the building block. We have already studied three such building blocks: full adders, priority circuits, and seven-segment display decoders. This section introduces two more commonly used building blocks: multiplexers and decoders. Chapter 5 covers other combinational building blocks.

Multiplexers are among the most commonly used combinational circuits. They choose an output from among several possible inputs based on the value of a select signal. A multiplexer is sometimes affectionately called a mux.

Figure 2.54 shows the schematic and truth table for a 2:1 multiplexer with two data inputs, D0 and D1, a select input, S, and one output, Y. The multiplexer chooses between the two data inputs based on the select. A 2:1 multiplexer can be built from sum-of-products logic as shown in Figure 2.55. The Boolean equation for the multiplexer may be derived with a Karnaugh map or read off by inspection. Alternatively, multiplexers can be built from tristate buffers, as shown in Figure 2.56. The tristate enables are arranged such that, at all times, exactly one tristate buffer is active.

A 4:1 multiplexer has four data inputs and one output, as shown in Figure 2.57. Two select signals are needed to choose among the four data inputs. The 4:1 multiplexer can be built using sum-of-products logic, tristates, or multiple 2:1 multiplexers, as shown in Figure 2.58. The product terms enabling the tristates can be formed using AND gates and inverters. They can also be formed using a decoder, which we will introduce in Section 2.8.2. Wider multiplexers, such as 8:1 and 16:1 multiplexers, can be built by expanding the methods shown in Figure 2.58. In general, an N:1 multiplexer needs log2N select lines. Again, the best implementation choice depends on the target technology.

Multiplexers can be used as lookup tables to perform logic functions. Figure 2.59 shows a 4:1 multiplexer used to implement a two-input AND gate. The inputs, A and B, serve as select lines. The multiplexer data inputs are connected to 0 or 1 according to the corresponding row of the truth table. In general, a 2N-input multiplexer can be programmed to perform any N-input logic function by applying 0’s and 1’s to the appropriate data inputs. Indeed, by changing the data inputs, the multiplexer can be reprogrammed to perform a different function. With a little cleverness, we can cut the multiplexer size in half, using only a 2N1-input multiplexer to perform any N-input logic function. The strategy is to provide one of the literals, as well as 0’s and 1’s, to the multiplexer data inputs. To illustrate this principle, Figure 2.60 shows two-input AND and XOR functions implemented with 2:1 multiplexers. We start with an ordinary truth table, and then combine pairs of rows to eliminate the rightmost input variable by expressing the output in terms of this variable. We then use the multiplexer as a lookup table according to the new, smaller truth table. A decoder has N inputs and 2N outputs. It asserts exactly one of its outputs depending on the input combination. Figure 2.63 shows a 2:4 decoder. The outputs are called one-hot, because exactly one is “hot” (HIGH) at a given time. Decoders can be combined with OR gates to build logic functions. Figure 2.65 shows the two-input XNOR function using a 2:4 decoder and a single OR gate. Because each output of a decoder represents a single minterm, the function is built as the OR of all the minterms in the function. When using decoders to build logic, it is easiest to express functions as a truth table or in canonical sum-of-products form. An N-input function with M 1’s in the truth table can be built with an N:2N decoder and an M-input OR gate attached to all of the minterms containing 1’s in the truth table. This concept will be applied to the building of Read Only Memories (ROMs) in Section 5.5.6."

Summary: "Logic gates are combined to produce larger circuits such as multiplexers, decoders, and priority circuits. A multiplexer chooses one of the data inputs based on the select input. A decoder sets one of the outputs HIGH according to the input. A priority circuit produces an output indicating the highest priority input."

---

Passage: "In previous sections, we have been concerned primarily with whether the circuit works—ideally, using the fewest gates. However, as any seasoned circuit designer will attest, one of the most challenging issues in circuit design is timing: making a circuit run fast. An output takes time to change in response to an input change. Figure 2.66 shows the delay between an input change and the subsequent output change for a buffer. The figure is called a timing diagram; it portrays the transient response of the buffer circuit when an input changes. The transition from LOW to HIGH is called the rising edge. Similarly, the transition from HIGH to LOW (not shown in the figure) is called the falling edge. The blue arrow indicates that the rising edge of Y is caused by the rising edge of A. We measure delay from the 50% point of the input signal, A, to the 50% point of the output signal, Y. The 50% point is the point at which the signal is half-way (50%) between its LOW and HIGH values as it transitions."

Summary:"'''

print(summarize(sample_text))
