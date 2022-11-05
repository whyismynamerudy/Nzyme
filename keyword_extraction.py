"""extract keywords from input text"""

import cohere
import pandas as pd
import requests
import datetime
from tqdm import tqdm

pd.set_option('display.max_colwidth', None)

api_key = 'MklIKiJvqX1nFagSi1jRU4k9YxoxfLwZvRG6xIUJ'
co = cohere.Client(api_key)

keywords = [
    (['multiplexer', 'decoder', 'priority circuit'], 'Logic gates are combined to produce larger circuits such as multiplexers, decoders, and priority circuits. A multiplexer chooses one of the data inputs based on the select input. A decoder sets one of the outputs HIGH according to the input. A priority circuit produces an output indicating the highest priority input.'),
    (['genes', 'genome', 'cellular functions'], 'In genetics, the basic approach to understanding any biological property is to find the subset of genes in the genome that influence that property. After these genes have been identified, their cellular functions can be elucidated through further research.')
]


def extract(prompt: str):
    """extract keywords from the input prompt

    prompt: string contiaining the input from which keywords are extracted"""
    my_prompt = '''
        Text: "Logic gates are combined to produce larger circuits such as multiplexers, decoders, and priority circuits. A multiplexer chooses one of the data inputs based on the select input. A decoder sets one of the outputs HIGH according to the input. A priority circuit produces an output indicating the highest priority input."
        Keywords from Text: 'multiplexer', 'decoder', 'priority circuit',

        ---

        Text: "In genetics, the basic approach to understanding any biological property is to find the subset of genes in the genome that influence that property. After these genes have been identified, their cellular functions can be elucidated through further research."
        Keywords from Text: 'genes', 'genome',
        
        ---
        
        Text = "Gene discovery starts with a “hunt” to amass mutants in which the biological function under investigation is altered or destroyed. Even though mutants are individually rare, there are ways of enhancing their recovery. One widely used method is to treat the organism with radiation or chemicals that increase the mutation rate. After treatment, the most direct way to identify mutants is to visually screen a very large number of individuals, looking for a chance occurrence of mutants in that population. Also, various selection methods can be devised to enrich for the types sought. Armed with a set of mutants affecting the property of interest, one hopes that each mutant represents a lesion in one of a set of genes that control the property. Hence, the hope is that a reasonably complete gene pathway or network is represented. However, not all mutants are caused by lesions within one gene (some have far more complex determination), so first each mutant has to be tested to see if indeed it is caused by a single-gene mutation. The test for single-gene inheritance is to mate individuals showing the mutant property with wild-type and then analyze the first and second generation of descendants. As an example, a mutant plant with white flowers would be crossed to the wild type showing red flowers. The progeny of this cross are analyzed, and then they themselves are interbred to produce a second generation of descendants. In each generation, the diagnostic ratios of plants with red flowers to those with white flowers will reveal whether a single gene controls flower color. If so, then by inference, the wild type would be encoded by the wild-type form of the gene and the mutant would be encoded by a form of the same gene in which a mutation event has altered the DNA sequence in some way. Other mutations affecting flower color (perhaps mauve, blotched, striped, and so on) would be analyzed in the same way, resulting overall in a set of defined “flower-color genes.” The use of mutants in this way is sometimes called genetic dissection, because the biological property in question (flower color in this case) is picked apart to reveal its underlying genetic program, not with a scalpel but with mutants. Each mutant potentially identifies a separate gene affecting that property. After a set of key genes has been defined in this way, several different molecular methods can be used to establish the functions of each of the genes. These methods will be covered in later chapters. Hence, genetics has been used to define the set of gene functions that interact to produce the property we call flower color (in this example). This type of approach to gene discovery is sometimes called forward genetics, a strategy to understanding biological function starting with random single-gene mutants and ending with their DNA sequence and biochemical function"
        Keywords from Text: 'heterozygous state', 'assortment', 'meiosis', 'intercrossed'

        ---
        
        Text: "The timing specification of a combinational circuit consists of the propagation and contamination delays through the circuit. These indicate the longest and shortest times between an input change and the consequent output change. Calculating the propagation delay of a circuit involves identifying the critical path through the circuit, then adding up the propagation delays of each element along that path. There are many different ways to implement complicated combinational circuits; these ways offer trade-offs between speed and cost."
        Keywords from Text: 'propagation', 'contamination delay', 'critical path'

        ---

        Text: "********"
        Keywords from Text:'''

    my_prompt = my_prompt.replace("********", prompt)

    extraction = co.generate(
        model='large',
        prompt=my_prompt,
        max_tokens=10,
        temperature=0.1,
        stop_sequences=["---"]
    )

    print(type(extraction.generations[0].text[:-1]))
    return extraction.generations[0].text[:-1]


my_text = "The test for single-gene inheritance is to mate individuals showing the mutant property with wild-type and then analyze the first and second generation of descendants. As an example, a mutant plant with white flowers would be crossed to the wild type showing red flower"
print(extract(my_text))
